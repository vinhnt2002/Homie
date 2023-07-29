import bcrypt from "bcrypt";
import prisma from "../../../lib/prismadb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, username, password } = req.body;

    try {
      const exist = await prisma.user.findFirst({
        where: {
          email,
        },
      });

      if (exist) {
        return res.status(400).json({ error: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await prisma.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
        },
      });

      return res
        .status(201)
        .json({ message: "User registered successfully", user: newUser });
    } catch (error) {
      console.log("Error registering user: ", error.message);
      return res
        .status(500)
        .json({ error: "An error occurred while registering the user" });
    }
  }
  return res.status(405).json({ error: "Method not allowed" });
}
