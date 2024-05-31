const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  path: { type: String, required: true },
  description: { type: String, required: true }
});

const membershipSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  listingNumber: { type: Number, required: true },
  discountPrice: { type: Number, required: true },
  discount: { type: Number, required: true },
  images: [imageSchema],
  logoImage: { path: { type: String, required: true } },
}, {
  timestamps: true
});

// Retrieve existing 'Product' model or define a new one
const Product = mongoose.models.Product || mongoose.model('Product', membershipSchema);

module.exports = Product;
