const mongoose = require("mongoose");

const RendelesSchema = new mongoose.Schema(
  {
    marka: String,
    ar: Number,
    uzemanyag: String,
    szin: String,
    szemelyiszam: String,
    rendeloemail: String,
  },
  { timestamps: true }
);

const RendelesModel = mongoose.model("rendeles", RendelesSchema);

module.exports = RendelesModel;
