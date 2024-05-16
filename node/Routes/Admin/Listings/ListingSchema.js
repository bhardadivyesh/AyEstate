const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  price: { type: String, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true },
  villa: { type: String },
  washbasin: { type: String, required: true },
  bed: { type: String, required: true },
  size: { type: String, required: true },
  description: { type: String, required: true },
    // image: { type: String, required: true },
});

module.exports = mongoose.model("Product", ProductSchema);
