const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const auth = require("../middleware/auth");
const multer = require("multer");

// Image upload config
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

/* ---------------- CREATE BLOG (Admin) ---------------- */
router.post("/", auth, upload.single("image"), async (req, res) => {
  const slug = req.body.title.toLowerCase().replace(/ /g, "-");

  const blog = new Blog({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    slug: slug,
    image: req.file ? req.file.filename : null,
  });

  await blog.save();
  res.json({ message: "Blog created", blog });
});

/* ---------------- GET ALL BLOGS (Public) ---------------- */
router.get("/", async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
});

/* ---------------- GET LATEST 3 BLOGS (For homepage) ---------------- */
router.get("/latest", async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 }).limit(3);
  res.json(blogs);
});

/* ---------------- GET BLOG BY SLUG (Public) ---------------- */
router.get("/slug/:slug", async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog)
      return res.status(404).json({ message: "Blog not found" });

    res.json(blog);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* ---------------- DELETE BLOG (Admin) ---------------- */
router.delete("/:id", auth, async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: "Blog deleted" });
});

/* ---------------- UPDATE BLOG (Admin) ---------------- */
router.put("/:id", auth, upload.single("image"), async (req, res) => {
  const updatedData = {
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
  };

  if (req.file) updatedData.image = req.file.filename;

  await Blog.findByIdAndUpdate(req.params.id, updatedData);
  res.json({ message: "Blog updated" });
});

module.exports = router;
