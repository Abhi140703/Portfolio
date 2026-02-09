const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    image: String,
    category: String,
    slug: { type: String, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);
