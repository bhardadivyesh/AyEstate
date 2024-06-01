const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MembershipSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  discount: {
    type: Number,
    required: true
  },
  discountPrice: {
    type: Number,
    required: true
  },
  listingNumber: {
    type: Number,
    required: true
  },
  membershipdescription1: {
    type: String,
    required: true
  },
  membershipdescription2: {
    type: String,
    required: true
  },
  membershipdescription3: {
    type: String,
    required: true
  },
  membershipdescription4: {
    type: String,
    required: true
  },
  membershipdescription5: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  logoImage: {
    type: String,
    required: true
  },
  image1: {
    type: String,
    required: true
  },
  image2: {
    type: String,
    required: true
  },
  image3: {
    type: String,
    required: true
  },
  image4: {
    type: String,
    required: true
  },
  image5: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Membership', MembershipSchema);
