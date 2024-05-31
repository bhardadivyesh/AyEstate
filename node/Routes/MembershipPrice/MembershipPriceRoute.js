const express = require('express');
const multer = require('multer');
const membershipSchema = require('./MembershipPriceSchema');
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post('/post-membership', upload.fields([
  { name: 'logoImage', maxCount: 1 },
  { name: 'image1', maxCount: 1 },
  { name: 'image2', maxCount: 1 },
  { name: 'image3', maxCount: 1 },
  { name: 'image4', maxCount: 1 },
  { name: 'image5', maxCount: 1 }
]), async (req, res) => {
  try {
    const {
      title,
      price,
      listingNumber,
      discountPrice,
      discount,
      membershipdescription1,
      membershipdescription2,
      membershipdescription3,
      membershipdescription4,
      membershipdescription5
    } = req.body;

    const product = new membershipSchema({
      title,
      price,
      listingNumber,
      discountPrice,
      discount,
      images: [
        { path: req.files['image1'][0].path, description: membershipdescription1 },
        { path: req.files['image2'][0].path, description: membershipdescription2 },
        { path: req.files['image3'][0].path, description: membershipdescription3 },
        { path: req.files['image4'][0].path, description: membershipdescription4 },
        { path: req.files['image5'][0].path, description: membershipdescription5 }
      ],
      logoImage: { path: req.files['logoImage'][0].path }
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
