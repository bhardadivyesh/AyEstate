const mongoose = require("mongoose");

const membershipPriceDetailSchema = new mongoose.Schema({
  price: { type: String, required: true},
  discount: {type: Number,required: true},
  discountPrice: {type: Number,required: true},
  listingNumber: {type: String,required: true}
});

module.exports = mongoose.model("MembershipPriceDetail", membershipPriceDetailSchema);
