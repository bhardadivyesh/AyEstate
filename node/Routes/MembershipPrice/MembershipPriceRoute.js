const express = require("express");
const router = express.Router();
const membershipSchema = require("./MembershipPriceSchema");

router.post("/post-pricing", async (req, res) => {
    try {
      const newpricing = new membershipSchema(req.body);
      await newpricing.save();
      res.status(201).json({ message: 'pricing added successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });

router.get("/get-pricing", async (req, res) => {
  try {
    let getPricingData = await membershipSchema.find();
    res.status(200).json(getPricingData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
