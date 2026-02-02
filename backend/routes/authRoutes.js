const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { login } = require("../controllers/authController");

router.post("/login", login);

// ✅ TEMPORARY REGISTER ROUTE
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      password: hashedPassword,
    });

    await user.save();
    res.json({ message: "User created" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.put("/reset-password", async (req, res) => {
  const bcrypt = require("bcryptjs");
  const User = require("../models/User");

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  await User.updateOne(
    { username: req.body.username },
    { $set: { password: hashedPassword } }
  );

  res.json({ message: "Password reset successful" });
});


module.exports = router;
