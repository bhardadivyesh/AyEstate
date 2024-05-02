const express = require("express");
const router = express.Router();
const Listing = require("./ListingSchema");

router.post("/post-listing", async (req, res) => {
    try {
      const newItem = new Listing(req.body);
      await newItem.save();
      res.status(201).json({ message: 'Item added successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });

router.get("/get-listing", async (req, res) => {
  try {
    let getListingData = await Listing.find();
    res.status(200).json(getListingData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
