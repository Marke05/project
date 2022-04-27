const express = require("express");
const path = require("path");
const router = express.Router();
const multer = require("multer");
const Autok = require("../models/Autok");

router.get("/autok", async (req, res) => {
  try {
    const autok = await Autok.find();
    res.status(200).json(autok);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// Multer beállítása
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../kliens/public/kepek");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: fileStorage });

router.post("/feltolt", upload.single("kep"), async (req, res) => {
  const marka = req.body.marka;
  const elektromos = req.body.elektromos;
  const ar = req.body.ar;
  const kep = req.file.originalname;

  try {
    const newAuto = new Autok({ marka, elektromos, ar, kep });
    const auto = await newAuto.save();
    res.redirect("/autoktabla");
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.delete("/torol/:kep", async (req, res) => {
  try {
    const kep = req.params.kep;
    console.log(kep);
    const user = await Autok.findOneAndDelete({ kep });
    res.redirect("/autoktabla");
    console.log(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
