import Menu from "../../../models/menu";
import { connectToDB } from "../../../utils/database";
import { getAllProduct } from "../../../action/menuApi";
import { diff } from 'jsondiffpatch';

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connectToDB();
      const newData = await getAllProduct();
      const oldData = await Menu.findOne({});
      const differences = diff(newData, oldData);
      if (differences !== undefined) {
        await Menu.deleteMany({});
        await Menu.insertMany(Array.isArray(newData) ? newData : [newData]);
      }
      const menu = await Menu.findOne({});
      res.status(200).json(menu);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to fetch all menu" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
