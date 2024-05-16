const mongoose = require("mongoose");

const ListingDetailPropertySchema = new mongoose.Schema({
    images: [{ type: String, required: true }],
    description1: {type : String,required : true},
    image1 : {type : String,required : true},
    description2 : { type : String,required : true} 
});

module.exports = mongoose.model("ListingDetail", ListingDetailPropertySchema);
