import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import User from "../../../models/user";
import { connectToDB } from "../../../utils/database";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      
      async authorize(credentials, req) {
        connectToDB().catch((error) => {
          error: "Connection Failed...!";
        });

        // check user existance
        const result = await User.findOne({ email: credentials.email });
        if (!result) {
          throw new Error("No user Found with Email Please Sign Up...!");
        }

        // compare()
        const checkPassword = await compare(
          credentials.password,
          result.password
        );

        // incorrect password
        if (!checkPassword || result.email !== credentials.email) {
          throw new Error("Username or Password doesn't match");
        }

        return result;
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ account, profile, email,provider }) {
 

      try {
        await connectToDB();
    
        // Check if user already exists
        const userExists = await User.find({ email: email });
    
        // If not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.image,
          });
        }
    
        return true;
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false;
      }
    }
    
  },
});
