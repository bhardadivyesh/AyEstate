const express = require("express");
const router = express.Router();
const RegistrationSchema = require("./RegistrationSchema");

router.post("/post-Registration", async (req, res) => {
  try {
    let {name,phone,company,email,password} = req.body;
    let isVendor = false
    let status = "pending"
    const newItem = new RegistrationSchema({name,phone,company,email,password,isVendor,status});
    await newItem.save();
    res.status(201).json({ message: "Registration successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// forgot password
router.post("/forgot-password", async (req, res) => {
  const { email, newPassword } = req.body; 
  try {
    console.log(email,newPassword);
    const user = await RegistrationSchema.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Update user's password
    user.password = newPassword;
    await user.save();
    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/get-Registration", async (req, res) => {
  try {
    let getListingData = await RegistrationSchema.find();
    res.status(200).json(getListingData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
router.put('/put-Registration', async (req, res) => {
  try {
    const userEmail = req.body.email; 
    const isVendor = true
    const status = req.body.status
    console.log(status);
    
    let updatedCategory = await RegistrationSchema.findOneAndUpdate({ email: userEmail }, {isVendor : isVendor,status : status}, { new: true });
    if (!updatedCategory) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(updatedCategory);
} catch (error) {
    res.status(500).json({ error: 'Internal Server Error' }); 
}
});

module.exports = router;
