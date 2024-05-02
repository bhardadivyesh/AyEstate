const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    category : String,
    image : String,
    price : Number,
    productname : String
});

const HomeSchemas = mongoose.model('Home', HomeSchema);

module.exports = HomeSchemas; 