const mongoose = require("mongoose");

const MembershipPriceSchema = new mongoose.Schema({
  price: { type: String, required: true },
  discount: { type: String, required: true },
  listingNumber: { type: String, required: true },
  membershipTitle: { type: String, required: true },
  membershipdescription1: { type: String, required: true },
  membershipdescription2: { type: String, required: true },
  membershipdescription3: { type: String, required: true },
  membershipdescription4: { type: String, required: true },
  membershipdescription5: { type: String, required: false },
  images: [{ type: String, required: true }]
});

module.exports = mongoose.model("MembershipPriceDetail", MembershipPriceSchema);
