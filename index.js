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
const Feedback = require("./database/feedback.js");
const Language = require("./database/language.js");
const ML = require("./database/MotivationLetter.js");
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

////// user sign in and sign up /////
app.post("/api/admin", (req, res) => {
  try {
    var obj = {
      name: req.body.name,
      password: req.body.password,
    };
    const newM = new Admin(obj);
    newM.save((err, result) => {
      res.send("dzadazda");
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

///// end Athontication user /////////

// CREATE COUACH /////
app.post("/api/coache", (req, res) => {
  try {
    var obj = {
      username: req.body.username,
      password: req.body.password,
    };
    const newM = new Coaches(obj);
    newM.save((err, result) => {
      res.send({ body: "created" });
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});

app.post("/api/getAllCoaches", function (req, res) {
  try {
    Coaches.find({}, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send(result);
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});
app.post("/api/req/:coachId", function (req, res) {
  try {
    Coaches.find({ coachId: req.params.coachId }, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send(result);
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});
/// END COACH

/// send request to coatch ///
app.post("/api/sendRequest", (req, res) => {
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
      res.send({ body: "ok" });
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});

app.post("/api/getrequest/user/:userId", function (req, res) {
  try {
    Request.find({ userId: req.params.userId }, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send(result);
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});

app.post("/api/getrequest/coach/:coachId", function (req, res) {
  try {
    Request.find({ coachId: req.params.coachId }, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send(result);
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});
/// end request ////

/// add the data for user ///
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
      res.send({ body: "ok" });
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
      res.send({ data: "ok" });
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});

app.post("/api/language", (req, res) => {
  try {
    var obj = {
      userId: req.body.userId,
      language: req.body.language,
    };
    const newM = new Language(obj);
    newM.save((err, result) => {
      res.send({ data: "ok" });
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
      res.send({ data: "ok" });
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
      res.send({ body: "ok" });
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});

/// END ADD DATA FOR USER /////

/// GET DATA OF USER ///////
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
    Education.find({ userId: req.params.userId }, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send(result);
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});

app.post("/api/soft/:userId", function (req, res) {
  try {
    Soft.find({ userId: req.params.userId }, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send(result);
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});

app.post("/api/language/:userId", function (req, res) {
  try {
    Language.find({ userId: req.params.userId }, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send(result);
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});
app.post("/api/tech/:userId", function (req, res) {
  try {
    Tech.find({ userId: req.params.userId }, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send(result);
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});
////// END GET USER DATA ////////

//////////// DELETE USER DATA ////////

app.delete("/api/experience/:_id", function (req, res) {
  try {
    Experience.deleteOne({ _id: req.params._id }, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send(result);
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});

app.delete("/api/education/:_id", function (req, res) {
  try {
    Education.deleteOne({ _id: req.params._id }, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send(result);
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});

app.delete("/api/soft/:_id", function (req, res) {
  try {
    Soft.deleteOne({ _id: req.params._id }, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send(result);
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});

app.delete("/api/language/:_id", function (req, res) {
  try {
    Language.deleteOne({ _id: req.params._id }, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send(result);
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});
app.delete("/api/tech/:_id", function (req, res) {
  try {
    Tech.deleteOne({ _id: req.params._id }, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send(result);
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});

////////// END USER DELETE DATA /////

/////// UPDATE USER DATA //////////

app.put("/api/experience/:_id", function (req, res) {
  try {
    var obj = {
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      company: req.body.company,
      post: req.body.post,
      discription: req.body.discription,
    };
    Experience.updateOne({ _id: req.params._id }, obj, function (
      error,
      result
    ) {
      if (error) console.log("this is error ====>", error);
      res.send({ result: "done" });
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});

app.put("/api/education/:_id", function (req, res) {
  try {
    var obj = {
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      university: req.body.university,
      diploma: req.body.diploma,
      discription: req.body.discription,
    };
    Education.updateOne({ _id: req.params._id }, obj, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send({ result: "done" });
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});

app.put("/api/soft/:_id", function (req, res) {
  try {
    var obj = {
      skill: req.body.skill,
    };
    Soft.updateOne({ _id: req.params._id }, obj, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send({ result: "done" });
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});

app.put("/api/language/:_id", function (req, res) {
  try {
    var obj = {
      language: req.body.language,
    };
    Language.updateOne({ _id: req.params._id }, obj, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send({ result: "done" });
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});
app.put("/halim", (req, res) => {
  res.send("madara ");
});
app.put("/api/tech/:_id", function (req, res) {
  try {
    var obj = {
      skill: req.body.skill,
    };
    Tech.updateOne({ _id: req.params._id }, obj, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send({ result: "done" });
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});
////// END UPDATE USER DATA ////////

//// motivation letter /////

app.post("/api/motivation", (req, res) => {
  try {
    var obj = {
      userId: req.body.userId,
      header: req.body.header,
      body: req.body.body,
    };
    const newM = new ML(obj);
    newM.save((err, result) => {
      res.send("dzadazda");
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});

app.post("/api/motivation/:userId", function (req, res) {
  try {
    ML.find({ userId: req.params.userId }, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send(result);
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});

app.put("/api/motivation/:_id", function (req, res) {
  try {
    var obj = {
      header: req.body.header,
      body: req.body.body,
    };
    ML.updateOne({ _id: req.params._id }, obj, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send({ result: "done" });
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});

app.delete("/api/motivation/:_id", function (req, res) {
  try {
    ML.deleteOne({ _id: req.params._id }, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send({ result: "done" });
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});
///// motivation letter /////

///// feedback ///////
app.post("/api/feedback", (req, res) => {
  try {
    var obj = {
      userId: req.body.userId,
      coachId: req.body.coachId,
      title: req.body.title,
      feedback: req.body.feedback,
    };
    const newM = new Feedback(obj);
    newM.save((err, result) => {
      res.send("dzadazda");
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});

app.post("/api/getFeedback/user/:userId", function (req, res) {
  try {
    Feedback.find({ userId: req.params.userId }, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send(result);
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});

app.post("/api/getFeedback/coach/:coachId", function (req, res) {
  try {
    Feedback.find({ coachId: req.params.coachId }, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send(result);
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});
////// end feedback ///////

////// admin //////
app.post("/api/getAllUsers", function (req, res) {
  try {
    Admin.find({}, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send(result);
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});
app.post("/api/getAllCoaches", function (req, res) {
  try {
    Coaches.find({}, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send(result);
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});

app.delete("/api/deleteCoach/:_id", function (req, res) {
  try {
    Coaches.deleteOne({ _id: req.params._id }, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send({ result: "done" });
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});
app.delete("/api/deleteUser/:_id", function (req, res) {
  try {
    Admin.deleteOne({ _id: req.params._id }, function (error, result) {
      if (error) console.log("this is error ====>", error);
      res.send({ result: "done" });
    });
  } catch {
    res.send({ status: false, msg: err });
  }
});
////// end admin /////
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000, () => {
  console.log("hahaha");
});
