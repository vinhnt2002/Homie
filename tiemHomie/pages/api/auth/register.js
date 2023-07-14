import { hash } from "bcrypt";
import User from "../../../models/user";
import { connectToDB } from "../../../utils/database";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, username, password,image } = req.body;

    try {
      await connectToDB();

      // Check if the user already exists
      const userExists = await User.findOne({ email });

      if (userExists) {
        return res.status(400).json({ error: "User already exists" });
      }
      const hashPassword = await hash(password, 10)

      // Create a new user document
      const newUser = await User.create({
        email,
        username,
        password: hashPassword, // Remember to hash the password before saving it in production
        image,
      });

      return res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
      console.log("Error registering user: ", error.message);
      return res.status(500).json({ error: "An error occurred while registering the user" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}