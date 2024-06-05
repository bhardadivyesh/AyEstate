const mongoose = require("mongoose");

const aboutUsSchema = new mongoose.Schema({
  images : [{type : String,required : true}],
  description : { type : String,required : true},
  fullName : { type : String,required : true},
  position : { type  : String,required : true}
});
module.exports = mongoose.model("aboutUs", aboutUsSchema);
