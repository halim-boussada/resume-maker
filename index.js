// const express = require("express");
// const app = express();

// const port = 3000;
// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const express = require("express");
const path = require("path");
var cors = require("cors");

const app = express();
var bodyParser = require("body-parser");
const multer = require("multer");
const Admin = require("./database/admin.js");
const Experience = require("./database/experience.js");
const Coaches = require("./database/coaches.js");
const Education = require("./database/education.js");
const Request = require("./database/requests.js");
const Soft = require("./database/softSkills.js");
const Tech = require("./database/technicalSkills.js");
app.use(cors());

const upload = multer({ dest: "uploads" });
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "whah",
  api_key: "967934588341829",
  api_secret: "5tGQ-PeH3P4psCWHmTkZfzbsEsc",
});
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// Serve only the static files form the dist directory
app.use(express.static("./dist/resume-maker"));

app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/resume-maker" })
);
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
  try {
    var obj = {
      name: req.body.name,
      password: req.body.password,
      imageUrl: req.body.imageUrl,
    };
    const newM = new Admin(obj);
    newM.save((err, result) => {
      res.send("dzadazda");
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});
app.post("/api/coache", (req, res) => {
  try {
    var obj = {
      username: req.body.username,
      password: req.body.password,
    };
    const newM = new Coaches(obj);
    newM.save((err, result) => {
      res.send("dzadazda");
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});
app.post("/api/education", (req, res) => {
  try {
    var obj = {
      userId: req.body.userId,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      university: req.body.university,
      diploma: req.body.diploma,
      discription: req.body.discription,
    };
    const newM = new Education(obj);
    newM.save((err, result) => {
      res.send("dzadazda");
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});
app.post("/api/request", (req, res) => {
  try {
    var obj = {
      userId: req.body.userId,
      coachId: req.body.coachId,
      userName: req.body.userName,
      email: req.body.email,
      about: req.body.about,
      data: req.body.data,
    };
    const newM = new Request(obj);
    newM.save((err, result) => {
      res.send("dzadazda");
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});
app.post("/api/soft", (req, res) => {
  try {
    var obj = {
      userId: req.body.userId,
      skill: req.body.skill,
    };
    const newM = new Soft(obj);
    newM.save((err, result) => {
      res.send("dzadazda");
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});
app.post("/api/tech", (req, res) => {
  try {
    var obj = {
      userId: req.body.userId,
      skill: req.body.skill,
    };
    const newM = new Tech(obj);
    newM.save((err, result) => {
      res.send("dzadazda");
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});
app.post("/api/ex", (req, res) => {
  try {
    var obj = {
      name: req.body.name,
      userId: req.body.userId,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      company: req.body.company,
      post: req.body.post,
      discription: req.body.discription,
    };
    const newM = new Experience(obj);
    newM.save((err, result) => {
      res.send("dodod");
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});
app.post("/api/user/:pw", function (req, res) {
  try {
    Admin.findOne({ password: req.params.pw }, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send(result);
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});

app.post("/api/experience/:userId", function (req, res) {
  try {
    Experience.findOne({ userId: req.params.userId }, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send(result);
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});

app.post("/api/education/:userId", function (req, res) {
  try {
    Education.findOne({ userId: req.params.userId }, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send(result);
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});

app.post("/api/soft/:userId", function (req, res) {
  try {
    Soft.findOne({ userId: req.params.userId }, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send(result);
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});
app.post("/api/tech/:userId", function (req, res) {
  try {
    Tech.findOne({ userId: req.params.userId }, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send(result);
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});

app.post("/api/req/:coachId", function (req, res) {
  try {
    Coaches.findOne({ coachId: req.params.coachId }, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send(result);
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});
// Start the app by listening on the default Heroku port
app.listen(3000, () => {
  console.log("hahaha");
});
