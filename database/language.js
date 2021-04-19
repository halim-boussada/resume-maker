const mongoose = require("mongoose");
const db = require("./connect.js");
mongoose.Promise = global.Promise;

const LanguageSchema = new mongoose.Schema(
  {
    userId: String,
    language: String,
    type: { type: String, default: "Language" },
  },
  {
    timestamps: true,
  }
);

const Language = mongoose.model("Language", LanguageSchema);

module.exports = Language;
