const mongoose = require("mongoose");
const db = require("./connect.js");
mongoose.Promise = global.Promise;

const MotivationLetterSchema = new mongoose.Schema(
  {
    userId: String,
    header: String,
    body: String,
    type: { type: String, default: "MotivationLetter" },
  },
  {
    timestamps: true,
  }
);

const MotivationLetter = mongoose.model(
  "MotivationLetter",
  MotivationLetterSchema
);

module.exports = MotivationLetter;
