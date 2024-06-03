const mongoose = require("mongoose");

const membershipSchema = new mongoose.Schema({
  price: { type: String, required: true },
  images: [{ type: String, required: true }],
  discount: { type: Number, required: true },
  discountPrice: { type: Number, required: true },
  listingNumber: { type: String, required: true },
  membershipdescription1: { type: String, required: true },
  membershipdescription2: { type: String, required: true },
  membershipdescription3: { type: String, required: true },
  membershipdescription4: { type: String, required: true },
  membershipdescription5: { type: String, required: true },
  title: { type: String, required: true },
});

module.exports = mongoose.model("membership", membershipSchema);
