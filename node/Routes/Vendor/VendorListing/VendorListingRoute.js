const express = require("express");
const router = express.Router();
const VendorListingSchema = require("./VendorListingSchema");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadsDir = path.join(
      __dirname,
      "..",
      "..",
      "..",
      "frontend",
      "src",
      "assets",
      "Images"
    );
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    cb(null, uniqueSuffix + extension);
  },
});

const upload = multer({ storage: storage });
router.use(
  "/images",
  express.static(path.join(__dirname, "../../../frontend/src/assets/Images"))
);

router.post(
  "/post-vendorListing",
  upload.fields([
    { name: "image1" },
    { name: "image2" },
    { name: "image3" },
    { name: "image4" },
  ]),
  async (req, res) => {
    try {
      const imageNames = [];
      for (let i = 1; i <= 4; i++) {
        if (req.files[`image${i}`]) {
          const imageName = req.files[`image${i}`][0].filename;
          imageNames.push(imageName);
        }
      }
      let status = "pending"
      const newListing = new VendorListingSchema({
        bedIcon: req.body.bedIcon,
        category: req.body.category,
        date: req.body.date,
        description: req.body.description,
        images: imageNames,
        listingDescription: req.body.listingDescription,
        listingTitle: req.body.listingTitle,
        location: req.body.location,
        locationIcon: req.body.locationIcon,
        price: req.body.price,
        sizeIcon: req.body.sizeIcon,
        name : req.body.name,
        washbasinIcon: req.body.washbasinIcon,
        status : status
      });
      await newListing.save();
      res.status(201).send("Listing created successfully");
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);
router.get("/get-vendorListing", async (req, res) => {
  try {
    const baseUrl = req.protocol + "://" + req.get("host") + "/images/";
    let getListingData = await VendorListingSchema.find();
    getListingData = getListingData.map((membership) => {
      membership.images = membership.images.map((image) => baseUrl + image);
      return membership;
    });
    res.status(200).json(getListingData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/get-vendorListing-pending", async (req, res) => {
  try {
    const baseUrl = req.protocol + "://" + req.get("host") + "/images/";
    let getListingData = await VendorListingSchema.find({status : "pending"});
    getListingData = getListingData.map((membership) => {
      membership.images = membership.images.map((image) => baseUrl + image);
      return membership;
    });
    res.status(200).json(getListingData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/get-vendorListing-active", async (req, res) => {
  try {
    const baseUrl = req.protocol + "://" + req.get("host") + "/images/";
    let getListingData = await VendorListingSchema.find({status : "active"});
    getListingData = getListingData.map((membership) => {
      membership.images = membership.images.map((image) => baseUrl + image);
      return membership;
    });
    res.status(200).json(getListingData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/get-vendorListing-reject", async (req, res) => {
  try {
    const baseUrl = req.protocol + "://" + req.get("host") + "/images/";
    let getListingData = await VendorListingSchema.find({status : "reject"});
    getListingData = getListingData.map((membership) => {
      membership.images = membership.images.map((image) => baseUrl + image);
      return membership;
    });
    res.status(200).json(getListingData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put('/put-vendorListing', async (req, res) => {
  try {
    const name = req.body.name; 
    const status = req.body.status
    let updatedCategory = await VendorListingSchema.findOneAndUpdate({ name: name }, {status : status}, { new: true });
    if (!updatedCategory) {
        return res.status(404).json({ error: 'Listing not found' });
    }
    res.status(200).json(updatedCategory);
} catch (error) {
    res.status(500).json({ error: 'Internal Server Error' }); 
}
});

router.delete("/delete-membership", async (req, res) => {
  try {
    const title = req.body.title;
    let deleteMembership = await membershipSchema.findOneAndDelete({
      title: title,
    });
    if (!deleteMembership) {
      return res.status(404).json({ error: "membership not found" });
    }
    res.status(200).json(deleteMembership);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router
