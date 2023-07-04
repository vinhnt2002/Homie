import Menu from "../../../models/menu";
import { connectToDB } from "../../../utils/database";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connectToDB();
      const menu = await Menu.find({});
      
      res.status(200).json(menu);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to fetch all menu" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
