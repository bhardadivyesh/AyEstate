const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  locationName : {type : String,required : true}
 
});

module.exports = mongoose.model("Location", LocationSchema);
