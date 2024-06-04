const express = require("express");
const router = express.Router();
const LocationSchema = require('./LocationSchema')

router.post("/post-location", async (req, res) => {
  try {
    let data = req.body;
    const newItem = new LocationSchema(data);
    await newItem.save();
    res.status(201).json({ message: "Location Added" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/get-location", async (req, res) => {
    try {
      let getListingData = await LocationSchema.find();
      res.status(200).json(getListingData);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  router.put('/put-location/:locationName', async (req, res) => {
    try {
      const locationName = req.params.locationName; 
      const newData = req.body;
  
      let updatedLocation = await LocationSchema.findOneAndUpdate(
        { locationName: locationName }, 
        newData, 
        { new: true }
      );
  
      if (!updatedLocation) {
        return res.status(404).json({ error: 'Location not found' });
      }
  
      res.status(200).json({ message: 'Location updated successfully', location: updatedLocation });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' }); 
    }
  });
  router.delete('/delete-location', async (req, res) => {
    try {
      const location = req.body.locationName; 
      let deletedLocation = await LocationSchema.findOneAndDelete({ locationName: location });
      if (!deletedLocation) {
        return res.status(404).json({ error: 'Location not found' });
      }
      res.status(200).json(deletedLocation);
      
    } catch (error) {
      
      res.status(500).json({ error: 'Internal Server Error' }); 
    }
  });
  
  module.exports = router;
  