const mongoose = require("mongoose");

const InquirySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email : { type : String, required : true},
  phone : { type : String, required : true},
  message : { type : String,required : true},
  additionalDetail : {type : String,required : true}
 
});

module.exports = mongoose.model("Inquiry", InquirySchema);
