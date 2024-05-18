const express = require("express");
const router = express.Router();
const CategorySchema = require('./CategorySchema')

router.post("/post-category", async (req, res) => {
  try {
    let data = req.body;
    const newItem = new CategorySchema(data);
    await newItem.save();
    res.status(201).json({ message: "category Added" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/get-category", async (req, res) => {
    try {
      let getCategoryData = await CategorySchema.find();
      res.status(200).json(getCategoryData);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  router.put('/put-category', async (req, res) => {
    try {
      const category = req.body.categoryName; 
      const newData = req.body;
      
      let updatedCategory = await CategorySchema.findOneAndUpdate({ categoryName: category }, newData, { new: true });
      if (!updatedCategory) {
          return res.status(404).json({ error: 'Category not found' });
      }
      res.status(200).json(updatedCategory);
  } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' }); 
  }
  });
  router.delete('/delete-category', async (req, res) => {
    try {
      const category = req.body.category; 
      console.log(category);
      let deletedCategory = await CategorySchema.findOneAndDelete({ category: category });
      if (!deletedCategory) {
        return res.status(404).json({ error: 'Category not found' });
      }
      res.status(200).json(deletedCategory);
      
    } catch (error) {
      
      res.status(500).json({ error: 'Internal Server Error' }); 
    }
  });
  
  module.exports = router;
  