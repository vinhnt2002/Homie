import User from "../../../models/user";
import { connectToDB } from "../../../utils/database";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const session = await getSession({ req });

    if (session) {
      try {
        await connectToDB();
        const user = await User.findOne({ email: session.user.email });
        res.status(200).json(user);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to fetch user" });
      }
    } else {
      const email = "minhkieu702@gmail.com";
      try {
        await connectToDB();
        const user = await User.findOne({ email: email });
        res.status(200).json(user);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to fetch user" });
      }
    }
  } 
  else if (req.method === "PUT") {
    const session = await getSession({ req });

    if (session) {
      const { email, newData } = req.body;
      try {
        await connectToDB();
        const user = await User.findOneAndUpdate({ email: email }, newData, {
          new: true,
        });
        res.status(200).json(user);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to update user" });
      }
    } else {
      const { email, newData } = req.body;
      try {
        await connectToDB();
        const user = await User.findOneAndUpdate({ email: email }, newData, {
          new: true,
        });
        res.status(200).json(user);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to update user" });
      }    
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
