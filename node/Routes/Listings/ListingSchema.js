const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  bed: { type: String, required: true },
  category: { type: String, required: true },
  image : { type: Array,require : true},
//   image1: { type: String, required: true },
//   image2: { type: String, required: true },
//   image3: { type: String, required: true },
//   image4: { type: String, required: true },
//   image5: { type: String, required: true },
  location: { type: String, required: true },
  size: { type: String, required: true },
  washbasin: { type: String, required: true }
});

module.exports = mongoose.model("Listing", listingSchema);
