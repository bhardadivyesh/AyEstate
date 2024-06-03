const express = require("express");
const router = express.Router();
const membershipSchema = require("./ListingSchema");
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Multer setup for storing files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadsDir = path.join(__dirname, '..', '..', '..', 'frontend', 'src', 'assets', 'Images');

    // Create the uploads directory if it doesn't exist
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(file.originalname);
    cb(null, uniqueSuffix + extension);
  }
});

const upload = multer({ storage: storage });

// Serve static files from the uploads directory
router.use('/images', express.static(path.join(__dirname, '../../../frontend/src/assets/Images')));

router.post("/post-membership", upload.fields([
  { name: 'image1' },
  { name: 'image2' },
  { name: 'image3' },
  { name: 'image4' },
  { name: 'image5' },
  { name: 'image6' }
]), async (req, res) => {
  try {
    const imageNames = [];
    for (let i = 1; i <= 6; i++) {
      if (req.files[`image${i}`]) {
        const imageName = req.files[`image${i}`][0].filename;
        imageNames.push(imageName);
      }
    }

    const newListing = new membershipSchema({
      price: req.body.price,
      images: imageNames,
      discount: req.body.discount,
      discountPrice: req.body.discountPrice,
      listingNumber: req.body.listingNumber,
      membershipdescription1: req.body.membershipdescription1,
      membershipdescription2: req.body.membershipdescription2,
      membershipdescription3: req.body.membershipdescription3,
      membershipdescription4: req.body.membershipdescription4,
      membershipdescription5: req.body.membershipdescription5,
      title: req.body.title
    });

    await newListing.save();
    res.status(201).send("Listing created successfully");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/get-membership", async (req, res) => {
  try {
    const baseUrl = req.protocol + '://' + req.get('host') + '/images/';
    let getMembershipData = await membershipSchema.find();
    getMembershipData = getMembershipData.map(membership => {
      membership.images = membership.images.map(image => baseUrl + image);
      return membership;
    });

    res.status(200).json(getMembershipData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put('/put-membership', async (req, res) => {
  try {
    const title = req.body.title;
    const newMembership = req.body;
    
    let updateMembership = await membershipSchema.findOneAndUpdate({ title: title }, newMembership, { new: true });
    if (!updateMembership) {
        return res.status(404).json({ error: 'membership not found' });
    }
    res.status(200).json(updateMembership);
} catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
}
});

router.delete('/delete-membership', async (req, res) => {
  try {
    const title = req.body.title;
    console.log(title);
    let deleteMembership = await membershipSchema.findOneAndDelete({ title: title });
    if (!deleteMembership) {
      return res.status(404).json({ error: 'membership not found' });
    }
    res.status(200).json(deleteMembership);
    
  } catch (error) {
    
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
