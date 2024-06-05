const express = require("express");
const router = express.Router();
const RegistrationSchema = require("./RegistrationSchema");
router.post("/post-Registration", async (req, res) => {
  try {
    let {name,phone,company,email,password} = req.body;
    let isVendor = false
    let status = "pending"
    const createdAt = new Date();
    const newItem = new RegistrationSchema({name,phone,company,email,password,isVendor,status,createdAt});
    await newItem.save();
    res.status(201).json({ message: "Registration successfully" });
  } catch (err) {
        res.status(500).json({ error: "Server error" });
  }
});
// forgot password
router.get("/get-Registration", async (req, res) => {
  try {
    let getListingData = await RegistrationSchema.find();
    res.status(200).json(getListingData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/get-Registration-active", async (req, res) => {
  try {
    let getListingData = await RegistrationSchema.find({ status: 'active' });
    res.status(200).json(getListingData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/get-Registration-pending", async (req, res) => {
  try {
    let getListingData = await RegistrationSchema.find({ status: 'pending' });
    res.status(200).json(getListingData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/get-Registration-reject", async (req, res) => {
  try {
    let getListingData = await RegistrationSchema.find({ status: 'reject' });
    res.status(200).json(getListingData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/get-Registration-freeVendor", async (req, res) => {
  try {
    let getListingData = await RegistrationSchema.find({ 
      paymentValue: { $exists: false } 
    });
    res.status(200).json(getListingData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.get("/get-Registration-paidVendor", async (req, res) => {
  try {
    let getListingData = await RegistrationSchema.find({ 
      paymentValue: { $exists: true } 
    });
    res.status(200).json(getListingData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.put('/put-Registration', async (req, res) => {
  try {
    const userEmail = req.body.email; 
    const paymentValue = req.body.paymentValue
    const status = req.body.status
    let updatedRegistration = await RegistrationSchema.findOneAndUpdate({ email: userEmail }, {status : status,paymentValue: paymentValue}, { new: true });
    if (!updatedRegistration) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(updatedRegistration);
} catch (error) {
    res.status(500).json({ error: 'Internal Server Error' }); 
}
});
module.exports = router;