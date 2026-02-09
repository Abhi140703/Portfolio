const cloudinary = require("./cloudinary");

cloudinary.uploader.upload(
  "https://res.cloudinary.com/demo/image/upload/sample.jpg"
)
.then(result => {
  console.log("Cloudinary working ✅");
  console.log(result.secure_url);
})
.catch(err => {
  console.error("Cloudinary error ❌");
  console.error(err.message);
});
