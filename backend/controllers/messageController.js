const Message = require("../models/Message");

// PUBLIC: create message
exports.createMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newMessage = new Message({
      name,
      email,
      message,
    });

    await newMessage.save();
    res.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// ADMIN: get all messages
exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// ADMIN: delete message
exports.deleteMessage = async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
