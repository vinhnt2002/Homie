import User from "../../../models/user";
import { connectToDB } from "../../../utils/database";
import { useSession } from "next-auth/react";
export default async function handler(req, res) {
  if (req.method === "GET") {
// const { email } = req.headers;
      try {
        await connectToDB();
        const user = await User.find({  });
        res.status(200).json(user);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to fetch user" });
      }
    } 
  else if (req.method === "PUT") {

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
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
