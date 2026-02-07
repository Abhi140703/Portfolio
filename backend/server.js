const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API is running...");
});

// 🔓 PUBLIC ROUTES
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/blogs", require("./routes/blogRoutes"));

// 🔐 AUTH ROUTES
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/messages", require("./routes/messageRoutes")); // protect inside route if needed

const PORT = process.env.PORT || 10000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () =>
      console.log("Server running on port", PORT)
    );
  })
  .catch((err) => console.error(err));
