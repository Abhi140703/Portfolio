const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { login } = require("../controllers/authController");

router.post("/login", login);

/* TEMP: create admin ONCE */
router.post("/create-admin", async (req, res) => {
  const exists = await User.findOne({ username: "admin" });
  if (exists) {
    return res.status(400).json({ message: "Admin already exists" });
  }

  const hashedPassword = await bcrypt.hash("admin123", 10);

  const user = new User({
    username: "admin",
    password: hashedPassword,
  });

  await user.save();
  res.json({ message: "Admin created" });
});

module.exports = router;
