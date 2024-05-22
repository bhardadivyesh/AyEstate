const express = require("express");
const router = express.Router();
const MembershipPriceDetail = require("./MembershipPriceSchema");
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer setup for storing files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

router.post("/post-membershipPriceDetail", upload.fields([
  { name: 'image1' }, 
  { name: 'image2' }, 
  { name: 'image3' }, 
  { name: 'image4' }, 
  { name: 'image5' }
]), async (req, res) => {
  try {
   console.log(req.body);

    const imagePaths = [];
    for (let i = 1; i <= 5; i++) {
      if (req.files[`image${i}`]) {
        imagePaths.push(req.files[`image${i}`][0].path);
      }
    }

    const newMembershipDetail = new MembershipPriceDetail({
      price: req.body.price,
      discount: req.body.discount,
      listingNumber: req.body.listingNumber,
      membershipTitle: req.body.membershipTitle,
      // images: imagePaths,
      membershipdescription1: req.body.membershipdescription1,
      membershipdescription2: req.body.membershipdescription2,
      membershipdescription3: req.body.membershipdescription3,
      membershipdescription4: req.body.membershipdescription4,
      membershipdescription5: req.body.membershipdescription5
    });

    await newMembershipDetail.save();
    res.status(201).send("Membership Detail added successfully");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/get-membershipPriceDetail", async (req, res) => {
  try {
    let getMembershipDetail = await MembershipPriceDetail.find();
    res.status(200).json(getMembershipDetail);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
