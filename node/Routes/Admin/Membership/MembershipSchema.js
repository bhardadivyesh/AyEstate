const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  isPro: {
    type: Boolean,
    default: false
  },
}, { timestamps: true });

module.exports = mongoose.model('Membership', membershipSchema);
