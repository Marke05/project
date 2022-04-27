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
  const uzemanyag = req.body.uzemanyag;
  const ar = req.body.ar;
  const szin = req.body.szin;
  const rendeloemail = req.body.rendeloemail;
  const szemelyiszam = req.body.szemelyiszam;
  try {
    
    const newRendeles = new Rendeles({ marka, ar, uzemanyag, szin, szemelyiszam, rendeloemail });

    const rendeles = await newRendeles.save();
    res.status(200).json(rendeles);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.delete("/torol/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const rendeles = await Rendeles.findOneAndDelete({ id });
    res.redirect("/rendelesek");
    console.log(rendeles);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
