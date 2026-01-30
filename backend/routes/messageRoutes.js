const express = require("express");
const router = express.Router();
const {
  createMessage,
  getMessages,
  deleteMessage,
} = require("../controllers/messageController");
const auth = require("../middleware/auth");

// public contact form
router.post("/", createMessage);

// admin routes
router.get("/", auth, getMessages);
router.delete("/:id", auth, deleteMessage);

module.exports = router;
