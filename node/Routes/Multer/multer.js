const express = require('express');
const multer = require('multer');
const path = require('path');
const Membership = require('./multerModel'); // Make sure to adjust the path according to your structure

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

router.post('/uploadMultiple', upload.fields([
  { name: 'logoImage', maxCount: 1 },
  { name: 'image1', maxCount: 1 },
  { name: 'image2', maxCount: 1 },
  { name: 'image3', maxCount: 1 },
  { name: 'image4', maxCount: 1 },
  { name: 'image5', maxCount: 1 }
]), async (req, res) => {
  try {
    const data = {
      ...req.body,
      logoImage: req.files['logoImage'][0].path,
      image1: req.files['image1'][0].path,
      image2: req.files['image2'][0].path,
      image3: req.files['image3'][0].path,
      image4: req.files['image4'][0].path,
      image5: req.files['image5'][0].path,
    };
console.log(req.body);
    const newMembership = new Membership(data);
    await newMembership.save();

    res.status(200).send('Files and data uploaded successfully!');
  } catch (error) {
    console.error('Error uploading files and data:', error);
    res.status(500).send('Error uploading files and data. Please try again.');
  }
});

module.exports = router;
