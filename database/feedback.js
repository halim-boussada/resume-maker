const mongoose = require("mongoose");
const db = require("./connect.js");
mongoose.Promise = global.Promise;

const FeedbackSchema = new mongoose.Schema(
  {
    userId: String,
    coachId: String,
    title: String,
    feedback: String,

    type: { type: String, default: "Feedback" },
  },
  {
    timestamps: true,
  }
);

const Feedback = mongoose.model("Feedback", FeedbackSchema);

module.exports = Feedback;
