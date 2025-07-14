// server/routes/authRoutes.js

const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");
const User = require("../models/User");

// רישום משתמש
router.post("/register", registerUser);

// התחברות
router.post("/login", loginUser);

// התנתקות
router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "Lax",
    secure: false,
  });
  return res.status(200).json({ message: "Logged out successfully" });
});

// שליפת פרטי המשתמש המחובר
router.get("/me", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error("Error in /me:", err.message);
    res.status(500).json({ message: "Failed to load user" });
  }
});

module.exports = router;
