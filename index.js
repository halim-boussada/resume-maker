const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const multer = require("multer");
const Admin = require("./database/admin.js");

const upload = multer({ dest: "uploads" });
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post("/upload", upload.any(0), (req, res) => {
  let image = req.files[0].path;
  console.log("REQ========> ", req.files[0].path);

  try {
    cloudinary.uploader.upload(image, (error, result) => {
      error && res.send({ status: false, msg: error });
      res.send({ status: true, msg: result });
    });
  } catch (err) {
    res.send({ status: false, msg: err });
  }
});

app.post("/api/admin", (req, res) => {
  var obj = {
    name: req.body.name,
    password: req.body.password,
    imageUrl: req.body.imageUrl,
  };
  const newM = new Admin(obj);
  newM.save((err, result) => {
    res.send("dzadazda");
  });
});
app.get("/api/admin", function (req, res) {
  Admin.find({}, function (error, result) {
    if (error) console.log("this is error ====>", error);
    res.send("hello sami from database");
  });
});
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
