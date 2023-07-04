import Menu from "../../../../models/menu";
import { connectToDB } from "../../../../utils/database";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connectToDB();

      const { id } = req.query; // Retrieve the ID parameter from the query object

      const menu = await Menu.findById(id);

      if (!menu) {
        return res.status(404).json({ error: "Menu not found" });
      }

      return res.status(200).json(menu);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Failed to fetch the menu item" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
