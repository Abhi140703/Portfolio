const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const auth = require("../middleware/auth");
const multer = require("multer");

console.log("✅ projectRoutes file loaded");

// const storage = multer.diskStorage({
//   destination: "uploads/",
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// const upload = multer({ storage });

// CREATE PROJECT (ADMIN)
router.post("/", auth, upload.single("image"), async (req, res) => {
  try {
    const project = new Project({
      title: req.body.title,
      description: req.body.description,
      link: req.body.link,
      image: req.file ? req.file.filename : null,
    });

    await project.save();
    res.json({ success: true, project });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// GET ALL PROJECTS (PUBLIC)
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});


// GET SINGLE PROJECT (PUBLIC)
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json(project);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});


// DELETE PROJECT (ADMIN)
router.delete("/:id", auth, async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});




module.exports = router;
