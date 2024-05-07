const express = require("express");
const router = express.Router();
const InquirySchema = require("./InquirySchema");

router.post("/post-Inquiry", async (req, res) => {
  try {
    let data = req.body;
    const newItem = new InquirySchema(data);
    await newItem.save();
    res.status(201).json({ message: "Inquiry send successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/get-Inquiry", async (req, res) => {
    try {
      let getListingData = await InquirySchema.find();
      res.status(200).json(getListingData);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  module.exports = router;
  