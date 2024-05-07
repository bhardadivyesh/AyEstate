const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  additionalInfo : { type : String , required : true },
  agreeToTerms : { type : Boolean, required : true },
  companySize : {type : String,require : true},
  email : {type : String,require : true},
  phoneNumber : {type : String,require : true}
});

module.exports = mongoose.model("ContactUs", listingSchema);
