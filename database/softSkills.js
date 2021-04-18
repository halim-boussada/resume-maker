const mongoose = require("mongoose");
const db = require("./connect.js");
mongoose.Promise = global.Promise;

const SoftSkillsSchema = new mongoose.Schema(
  {
    userId: String,
    skill: String,
    type: { type: String, default: "SoftSkills" },
  },
  {
    timestamps: true,
  }
);

const SoftSkills = mongoose.model("SoftSkills", SoftSkillsSchema);

module.exports = SoftSkills;
