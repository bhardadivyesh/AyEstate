const express = require("express");
const router = express.Router();
const blogsSchema = require("./BlogsSchema");
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
  "/post-blogs",
  upload.fields([
    { name: "image1" },
    { name: "image2" },
  ]),
  async (req, res) => {
    try {
      const imageNames = [];
      for (let i = 1; i <= 2; i++) {
        if (req.files[`image${i}`]) {
          const imageName = req.files[`image${i}`][0].filename;
          imageNames.push(imageName);
        }
      }
      const newBlogs = new blogsSchema({
        images: imageNames,
        date: req.body.date,
        longDescription : req.body.longDescription,
        sortDescription : req.body.sortDescription,
        suggestion : req.body.suggestion
      });
      await newBlogs.save();
      res.status(201).send("Blogs created successfully");
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);
router.get("/get-blogs", async (req, res) => {
  try {
    const baseUrl = req.protocol + "://" + req.get("host") + "/images/";
    let getListingData = await blogsSchema.find();
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
