const express = require("express");
const router = express.Router();
const ListingDetailSchema = require("./ListingDetailPropertySchema");
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

router.post("/post-listingDetail", upload.fields([
  { name: 'image1' }, 
  { name: 'image2' }, 
  { name: 'image3' }, 
]), async (req, res) => {
  try {
    const imagePaths = [];
    for (let i = 1; i <= 3; i++) {
      if (req.files[`image${i}`]) {
        imagePaths.push(req.files[`image${i}`][0].path);
      }
    }

    const newListing = new ListingDetailSchema({
      name: req.body.name,
      description1 : req.body.description1,
      image1 : req.body.image1,
      description2 : req.body.description2,
      images: imagePaths
    });

    await newListing.save();
    res.status(201).send("ListingDetail created successfully");
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/get-listingDetail", async (req, res) => {
  try {
    let getListingData = await ListingDetailSchema.find();
    res.status(200).json(getListingData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
