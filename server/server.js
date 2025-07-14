// server/server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// טעינת משתני סביבה
dotenv.config();

// יצירת אפליקציה
const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // או 3000, תלוי איפה ריאקט רץ
    credentials: true, // חובה בשביל שליחת cookie
  })
);
app.use(cookieParser());
app.use(express.json());

// ראוט בסיסי לבדיקה
app.get("/", (req, res) => {
  res.send("AuthBase API is running");
});

// ייבוא ראוטים
const authRoutes = require("./routes/authRoutes");
app.use("/api", authRoutes);

// חיבור למסד הנתונים והפעלת השרת
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });
