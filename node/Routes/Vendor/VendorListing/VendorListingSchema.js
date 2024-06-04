const mongoose = require("mongoose");

const membershipSchema = new mongoose.Schema({
    bedIcon : { type : String,required : true},
    category : { type : String,required : true},
    date : { type : String,required : true},
    description : { type : String,required : true},
    images : [{type : String,required : true}],
    listingDescription : { type : String,required : true},
    listingTitle : { type : String,required : true},
    location : { type : String,required : true},
    locationIcon : { type : String,required : true},
    price : { type : String,required : true},
    sizeIcon : { type : String,required : true},
    washbasinIcon : { type : String,required : true},
    status : { type : String,required : true},
    name : { type : String,required : true}
});

module.exports = mongoose.model("listing", membershipSchema);
