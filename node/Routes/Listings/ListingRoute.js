const express = require("express");
const router = express.Router();
const Listing = require("./ListingSchema");
const multer = require('multer');

// Multer setup for storing files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post("/post-listing", upload.fields([
  { name: 'image1' }, 
  { name: 'image2' }, 
  { name: 'image3' }, 
  { name: 'image4' }, 
  { name: 'image5' }
]), async (req, res) => {
  try {
    const imagePaths = [];
    for (let i = 1; i <= 5; i++) {
      if (req.files[`image${i}`]) {
        imagePaths.push(req.files[`image${i}`][0].path);
      }
    }

    const newListing = new Listing({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      bed: req.body.bed,
      category: req.body.category,
      location: req.body.location,
      size: req.body.size,
      washbasin: req.body.washbasin,
      images: imagePaths
    });

    await newListing.save();
    res.status(201).send("Listing created successfully");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/get-listing", async (req, res) => {
  try {
    let getListingData = await Listing.find();
    res.status(200).json(getListingData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
