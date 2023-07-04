import Menu from "../../../models/menu";
import { connectToDB } from "../../../utils/database";
import { getAllProduct } from "../../../action/menuApi";
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = await getAllProduct();
      console.log(data);
      await connectToDB();
      await Menu.deleteMany({});
      await Menu.insertMany(Array.isArray(data) ? data : [data]); // check case array === null
      
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to fetch all menu" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
