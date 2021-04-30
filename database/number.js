const mongoose = require("mongoose");
const db = require("./connect.js");
mongoose.Promise = global.Promise;

const NamberSchema = new mongoose.Schema(
  {
    userId: String,
    number: { type: Number, default: 1 },
    type: { type: String, default: "Namber" },
  },
  {
    timestamps: true,
  }
);

const Namber = mongoose.model("Namber", NamberSchema);

module.exports = Namber;
