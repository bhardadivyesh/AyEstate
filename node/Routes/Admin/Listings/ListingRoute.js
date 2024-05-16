const express = require("express");
const router = express.Router();
const ListingSchema = require("./ListingSchema");
const multer = require("multer");

// Multer setup for storing files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post(
  "/post-product",
  upload.fields([{ name: "image" }]),
  async (req, res) => {
    try {
    //   const imagePaths = [];

    //   imagePaths.push(req.files[`image`][0].path);

      const newProduct = new ListingSchema({
        productName: req.body.productName,
        price: req.body.price,
        description: req.body.description,
        bed: req.body.bed,
        category: req.body.category,
        location: req.body.location,
        size: req.body.size,
        washbasin: req.body.washbasin,
        villa : req.body.villa,
        // image: imagePaths,
      });
      await newProduct.save();
      res.status(201).send("Product Post successfully");
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

router.get("/get-product", async (req, res) => {
  try {
    let getProduct = await ListingSchema.find();
    res.status(200).json(getProduct);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.put('/put-product', async (req, res) => {
  try {
    const productName = req.body.productName; 
    const newData = req.body;
    
    let updateProduct = await ListingSchema.findOneAndUpdate({ productName: productName }, newData, { new: true });
    if (!updateProduct) {
        return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(updateProduct);
} catch (error) {
    res.status(500).json({ error: 'Internal Server Error' }); 
}
});
router.delete('/delete-product', async (req, res) => {
  try {
    const product = req.body.productName; 
    let deleteProduct = await ListingSchema.findOneAndDelete({ productName: product });
    if (!deleteProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(deleteProduct);
    
  } catch (error) {
    
    res.status(500).json({ error: 'Internal Server Error' }); 
  }
});

module.exports = router;
