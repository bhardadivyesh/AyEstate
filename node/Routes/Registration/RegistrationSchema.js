const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone : { type : String, required : true},
  company : { type : String,require : true},
  email : { type : String,require : true,unique : true},
  password : { type : String, require : true},
  isVendor : { type : Boolean,required : true},
  status : { type : String, required : true}
});

module.exports = mongoose.model("Registration", registrationSchema);
