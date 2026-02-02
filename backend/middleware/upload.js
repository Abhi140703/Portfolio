const multer = require("multer");
const cloudinary = require("../config/cloudinary");
const { storage } = require("multer-storage-cloudinary");

const upload = multer({
  storage: storage({
    cloudinary,
    params: {
      folder: "portfolio",
      allowed_formats: ["jpg", "jpeg", "png", "webp"],
    },
  }),
});

module.exports = upload;
