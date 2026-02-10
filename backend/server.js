const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const auth = require("./middleware/auth");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/projects", auth, require("./routes/projectRoutes"));
app.use("/api/blogs", auth, require("./routes/blogRoutes"));
app.use("/api/messages", auth, require("./routes/messageRoutes"));

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
