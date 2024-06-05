const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema({
  date: { type : String,required : true},
  images : [{type : String,required : true}],
  longDescription : { type : String,required : true},
  sortDescription : { type  : String,required : true},
  suggestion : { type : String, required : true}
 
});
module.exports = mongoose.model("blogs", blogsSchema);
