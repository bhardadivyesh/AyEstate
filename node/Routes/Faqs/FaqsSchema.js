const mongoose = require("mongoose");

const faqsSchema = new mongoose.Schema({
  description: { type: String, required: true },
  moreDescription: { type: String, required: true },
  question: { type: String, required: true }
});
module.exports = mongoose.model("faqss", faqsSchema);
