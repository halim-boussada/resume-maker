const mongoose = require("mongoose");
const db = require("./connect.js");
mongoose.Promise = global.Promise;

const EducetionSchema = new mongoose.Schema(
  {
    userId: String,
    startDate: String,
    endDate: String,
    university: String,
    diploma: String,
    discription: String,
    type: { type: String, default: "Educetion" },
  },
  {
    timestamps: true,
  }
);

const Educetion = mongoose.model("Educetion", EducetionSchema);

module.exports = Educetion;
