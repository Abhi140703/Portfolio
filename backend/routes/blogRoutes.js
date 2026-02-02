const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");
const auth = require("../middleware/auth");
const upload = require("../middleware/upload"); 
const cloudinary = require("../config/cloudinary");

/* ---------------- CREATE BLOG (Admin) ---------------- */
router.post("/", auth, upload.single("image"), async (req, res) => {
  try {
    let imageUrl = null;

    if (req.file) {
      const result = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          { folder: "portfolio" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        ).end(req.file.buffer);
      });

      imageUrl = result.secure_url;
    }

    const slug = req.body.title.toLowerCase().replace(/ /g, "-");

    const blog = new Blog({
      title: req.body.title,
      content: req.body.content,
      category: req.body.category,
      slug,
      image: imageUrl,
    });

    await blog.save();
    res.json({ message: "Blog created", blog });
  } catch (error) {
    console.error("BLOG CREATE ERROR:", error);
    res.status(500).json({ error: error.message });
  }
});

/* ---------------- GET ALL BLOGS (Public) ---------------- */
router.get("/", async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
});

/* ---------------- GET LATEST 3 BLOGS ---------------- */
router.get("/latest", async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 }).limit(3);
  res.json(blogs);
});

/* ---------------- GET BLOG BY SLUG ---------------- */
router.get("/slug/:slug", async (req, res) => {
  const blog = await Blog.findOne({ slug: req.params.slug });
  if (!blog) return res.status(404).json({ message: "Blog not found" });
  res.json(blog);
});

/* ---------------- DELETE BLOG ---------------- */
router.delete("/:id", auth, async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: "Blog deleted" });
});

/* ---------------- UPDATE BLOG ---------------- */
router.put("/:id", auth, upload.single("image"), async (req, res) => {
  const updatedData = {
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
  };

  if (req.file) updatedData.image = req.file.path;

  await Blog.findByIdAndUpdate(req.params.id, updatedData);
  res.json({ message: "Blog updated" });
});

module.exports = router;
