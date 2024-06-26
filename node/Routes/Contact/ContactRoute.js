const express = require("express");
const router = express.Router();
const ContactSchema = require("./ContactSchema");

router.post("/post-contact", async (req, res) => {
    try {
      const newItem = new ContactSchema(req.body);
      await newItem.save();
      res.status(201).json({ message: 'Inquiry Send successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  });

router.get("/get-contact", async (req, res) => {
  try {
    let getListingData = await ContactSchema.find();
    res.status(200).json(getListingData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;