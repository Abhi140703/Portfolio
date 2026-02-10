const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { login } = require("../controllers/authController");

router.post("/login", login);

module.exports = router;
