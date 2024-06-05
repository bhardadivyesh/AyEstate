const express = require("express");
const router = express.Router();
const InquirySchema = require("./InquirySchema");

router.post("/post-Inquiry", async (req, res) => {
  try {
    let status = "pending"
    const newItem = new InquirySchema({
      name : req.body.name,
      email : req.body.email,
      phoneNumber : req.body.phoneNumber,
      status : status
    });
    await newItem.save();
    res.status(201).json({ message: "Inquiry send" });
  } catch (err) {
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
  router.get("/get-Inquiry-pending", async (req, res) => {
    try {
      let getListingData = await InquirySchema.find({status : 'pending'});
      res.status(200).json(getListingData);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  router.get("/get-Inquiry-active", async (req, res) => {
    try {
      let getListingData = await InquirySchema.find({status : 'active'});
      res.status(200).json(getListingData);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }); router.get("/get-Inquiry-reject", async (req, res) => {
    try {
      let getListingData = await InquirySchema.find({status : 'reject'});
      res.status(200).json(getListingData);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
  module.exports = router;
  