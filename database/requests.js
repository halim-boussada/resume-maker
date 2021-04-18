const mongoose = require("mongoose");
const db = require("./connect.js");
mongoose.Promise = global.Promise;

const RequestSchema = new mongoose.Schema(
  {
    userId: String,
    coachId: String,
    userName: String,
    email: String,
    about: String,
    data: String,
    type: { type: String, default: "Request" },
  },
  {
    timestamps: true,
  }
);

const Request = mongoose.model("Request", RequestSchema);

module.exports = Request;
