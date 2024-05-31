const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone : { type : String, required : true},
  company : { type : String,require : true},
  email : { type : String,require : true,unique : true},
  password : { type : String, require : true},
  isVendor : { type : Boolean,required : true},
  status : { type : String, required : true},
  paymentValue : {type : String,required : false},
  createdAt: { type: Date, default: () => moment().tz('Asia/Kolkata').startOf('day').toDate() }
});

module.exports = mongoose.model("Registration", registrationSchema);
