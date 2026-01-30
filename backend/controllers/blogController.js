const Blog = require("../models/Blog");

// CREATE blog
exports.createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.json({ message: "Blog created", blog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET all blogs
exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ date: -1 });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET single blog
exports.getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE blog
exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "Blog updated", blog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE blog
exports.deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
