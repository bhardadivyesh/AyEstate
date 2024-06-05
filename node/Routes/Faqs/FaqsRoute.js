const express = require("express");
const router = express.Router();
const faqsSchema = require("./FaqsSchema");

router.post("/post-faqs",async (req, res) => {
    try {
      const newFaqs = new faqsSchema({
        description : req.body.description,
        moreDescription : req.body.moreDescription,
        question : req.body.question
      });
      await newFaqs.save();
      res.status(201).send("faqs created successfully");
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);
router.get("/get-faqs", async (req, res) => {
  try {
    let getListingData = await faqsSchema.find();
    res.status(200).json(getListingData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});








module.exports = router
