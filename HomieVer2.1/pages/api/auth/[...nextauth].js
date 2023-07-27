import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import prisma from "../../../lib/prismadb";

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

      async authorize(credentials) {
        // check user existance
        const result = await prisma.user.findFirst({
          where: {
            email: credentials.email,
          },
        });
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
      if (session.user?.email) {
        const sessionUser = await prisma.user.findFirst({
          where: { email: session.user.email },
        });
  
        if (sessionUser?.id) {
          session.user.id = sessionUser.id.toString();
        }
      }
  
      return session;
    },
    async signIn({ account, profile, email, credentials }) {
      try {

        const userExists = await prisma.user.findFirst( {where :{email : email}} );

        if (!userExists) {
          await prisma.user.create({
            data: {
              email: email || credentials.email,
              username: profile?.name?.replace(" ", "").toLowerCase(),
              image: profile.image,
            },
          });
        }

        return true;
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false;
      }
    },
  },

  //test
  baseUrl: "https://homie-sable.vercel.app",

});



// // Import the necessary modules and the Prisma client
// import NextAuth from "next-auth/next";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// // import GithubProvider from "next-auth/providers/github";
// import bcrypt from 'bcrypt';
// import prisma from "../../../lib/prismadb";
// // Initialize the Prisma client

// export default NextAuth({
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {
//         email: { label: "Email", type: "text", placeholder: "jsmith" },
//         password: { label: "Password", type: "password" },
//         username: { label: "Username", type: "text", placeholder: "John Smith" },
//       },
//       async authorize(credentials) {
//         // Check to see if email and password are provided
//         if (!credentials.email || !credentials.password) {
//           throw new Error('Please enter an email and password');
//         }

//         // Check to see if the user exists
//         const user = await prisma.user.findFirst({
//           where: {
//             email: credentials.email,
//           },
//         });

//         // If no user was found or the hashedPassword is missing
//         if (!user || !user.password) {
//           throw new Error('No user found');
//         }

//         // Check if the password matches
//         const passwordMatch = await bcrypt.compare(credentials.password, user.password);

//         // If the password does not match
//         if (!passwordMatch) {
//           throw new Error('Incorrect password');
//         }

//         return user;
//       },
//     }),
//   ],
//   secret: process.env.SECRET,
//   session: {
//     strategy: "jwt",
//   },
//   debug: process.env.NODE_ENV === "development",
// });
