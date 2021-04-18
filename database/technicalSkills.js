const mongoose = require("mongoose");
const db = require("./connect.js");
mongoose.Promise = global.Promise;

const TechnicalSkillsSchema = new mongoose.Schema(
  {
    userId: String,
    skill: String,
    type: { type: String, default: "TechnicalSkills" },
  },
  {
    timestamps: true,
  }
);

const TechnicalSkills = mongoose.model(
  "TechnicalSkills",
  TechnicalSkillsSchema
);

module.exports = TechnicalSkills;
