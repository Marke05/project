const express = require("express");
const router = express.Router();
const Rendeles = require("../models/Rendeles");

router.get("/", async (req, res) => {
  try {
    const rendeles = await Rendeles.find();
    console.log(rendeles);
    res.status(200).json(rendeles);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.post("/feltolt", async (req, res) => {
  const marka = req.body.marka;
  const ar = req.body.ar;
  const uzemanyag = req.body.uzemanyag;
  const szin = req.body.szin;
  const szemelyiszam = req.body.szemelyiszam;
  const rendeloemail = req.body.rendeloemail;

  try {
    const newRendeles = new Rendeles({ marka, ar,uzemanyag,szin,szemelyiszam,rendeloemail });

    const rendeles = await newRendeles.save();
    res.status(200).json(rendeles);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
