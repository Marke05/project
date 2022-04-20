const mongoose = require("mongoose");

const AutokSchema = new mongoose.Schema(
  {
    marka: {
      type: String,
      required: true,
      unique: true,
    },
    elektromos: {
      type: String,
      required: true,
    },
    ar: {
      type: Number,
      required: true,
    },
    kep: {
      type: String,
    },
  },
  { timestamps: true }
);

const AutokModel = mongoose.model("autok", AutokSchema);

module.exports = AutokModel;
