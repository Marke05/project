const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const ejs = require("ejs");
dotenv.config();

const app = express();

// Adatbázis kapcsolat
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Sikeres adatbázis csatlakozás!");
  })
  .catch((err) => {
    console.log(`Valami hiba történt: ${err.message}`);
  });

// Middleware-k
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.set("view-engine", "ejs");


// Route-ok
app.use("/api/user", require("./routes/userRoute"));
app.use("/api/auto", require("./routes/autoRoute"));
app.use("/api/rendeles", require("./routes/rendelesRoute"));


// Route-ok a auto-tábla szerkesztéséhez
const Autok = require("./models/Autok");
const User = require("./models/User")

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/autofeltoltes", (req, res) => {
  res.render("autofeltoltes.ejs");
});

app.get("/autoktabla",async (req, res) => {
  const auto = await Autok.find();
  res.render("autoktabla.ejs", {
    auto: auto,
  });
});

app.get("/usertabla",async (req, res) => {
  const user = await User.find();
  res.render("usertabla.ejs", {
    user: user,
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`A szerver fut a következő porton: http://localhost:${PORT}`);
});
