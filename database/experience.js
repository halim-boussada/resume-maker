const mongoose = require("mongoose");
const db = require("./connect.js");
mongoose.Promise = global.Promise;

const ExperienceSchema = new mongoose.Schema(
  {
    userId: String,
    startDate: String,
    endDate: String,
    company: String,
    post: String,
    discription: String,
    type: { type: String, default: "experience" },
  },
  {
    timestamps: true,
  }
);

const Experience = mongoose.model("experience", ExperienceSchema);

module.exports = Experience;
