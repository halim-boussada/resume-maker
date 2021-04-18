const mongoose = require("mongoose");
const db = require("./connect.js");
mongoose.Promise = global.Promise;

const CoachesSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    type: { type: String, default: "Coaches" },
  },
  {
    timestamps: true,
  }
);

const Coaches = mongoose.model("Coaches", CoachesSchema);

module.exports = Coaches;
