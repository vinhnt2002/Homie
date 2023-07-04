// const mongoose = require("mongoose");
import {Schema,model,models} from "mongoose";


// Define the schema for the "menus" collection
const menuSchema = new Schema({
  id: String,
  brandId: String,
  code: String,
  priority: Number,
  isBaseMenu: Boolean,
  dateFilter: {
    startTime: String,
    endTime: String,
  },
  products: [Object],
  collections: [Object],
  categories: [Object],
  groupProducts: [Object],
  productsInGroup: [Object],
});

// Create a Mongoose model based on the schema
// const MenuModel = mongoose.model("Menu", menuSchema);

const Menu = models.Menu || model('Menu',menuSchema);

export default Menu