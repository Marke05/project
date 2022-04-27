const mongoose = require("mongoose");

const RendelesSchema = new mongoose.Schema(
  {
    marka:
    { type:String
      ,required: true} ,
    ar:
    { type: Number
      ,required: true} ,
    uzemanyag:
    { type:String
      ,required: true} ,
    szin: 
    { type:String
      ,required: true} ,
    szemelyiszam:
     { type:String
      ,required: true} ,
    rendeloemail: 
    { type:String
      ,required: true} ,
  },
  { timestamps: true }
);

const RendelesModel = mongoose.model("rendeles", RendelesSchema);

module.exports = RendelesModel;
