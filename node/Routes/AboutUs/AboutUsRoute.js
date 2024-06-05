const express = require("express");
const router = express.Router();
const aboutUsSchema = require("./AboutUsSchema");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Multer setup for storing files
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

    // Create the uploads directory if it doesn't exist
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

// Serve static files from the uploads directory
router.use(
  "/images",
  express.static(path.join(__dirname, "../../../frontend/src/assets/Images"))
);

router.post(
  "/post-aboutUs",
  upload.fields([
    { name: "image1" },
  ]),
  async (req, res) => {
    try {
      const imageNames = [];
      for (let i = 1; i <= 1; i++) {
        if (req.files[`image${i}`]) {
          const imageName = req.files[`image${i}`][0].filename;
          imageNames.push(imageName);
        }
      }
      const newBlogs = new aboutUsSchema({
        images: imageNames,
        description : req.body.description,
        fullName : req.body.fullName,
        position : req.body.position
      });
      await newBlogs.save();
      res.status(201).send("TeamMember created successfully");
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);
router.get("/get-aboutUs", async (req, res) => {
  try {
    const baseUrl = req.protocol + "://" + req.get("host") + "/images/";
    let getListingData = await aboutUsSchema.find();
    getListingData = getListingData.map((membership) => {
      membership.images = membership.images.map((image) => baseUrl + image);
      return membership;
    });
    res.status(200).json(getListingData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router
