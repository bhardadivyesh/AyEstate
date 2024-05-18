const express = require("express");
const router = express.Router();
const membershipSchema = require("./MembershipSchema");
// Create a new user
router.post("/create-user", async (req, res) => {
  const { userId, isPro } = req.body;
  try {
    const newUser = new membershipSchema({ userId, isPro });
    await newUser.save();
    res.json({
      success: true,
      message: "User created successfully.",
      user: newUser,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});
// Get user details
router.get("/get-user/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await membershipSchema.findOne({ userId: userId });
    if (user) {
      res.json({ success: true, user });
    } else {
      res.status(404).json({ success: false, message: "User not found." });
    }
  } catch (error) {
    console.error("Error getting user details:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});
// Update user details
router.put("/update-user/:userId", async (req, res) => {
  const userId = req.params.userId;
  const { isPro } = req.body;
  try {
    const updatedUser = await membershipSchema.findOneAndUpdate(
      { userId: userId },
      { $set: { isPro: isPro } },
      { new: true }
    );
    if (updatedUser) {
      res.json({
        success: true,
        message: "User details updated successfully.",
        user: updatedUser,
      });
    } else {
      res.status(404).json({ success: false, message: "User not found." });
    }
  } catch (error) {
    console.error("Error updating user details:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});
// Delete a user
router.delete("/delete-user/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const deletedUser = await membershipSchema.findOneAndDelete({
      userId: userId,
    });
    if (deletedUser) {
      res.json({
        success: true,
        message: "User deleted successfully.",
        user: deletedUser,
      });
    } else {
      res.status(404).json({ success: false, message: "User not found." });
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});
module.exports = router;