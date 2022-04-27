const User = require("../../models/User");
const CryptoJS = require("crypto-js");


const oneUser = async (req, res) => {
  console.log("Lekérés...");
  const nev = req.body.nev;
  const pass = req.body.password;
  console.log(nev +" : "+pass);
  
  try {
    const user = await User.findOne({ nev });
    const { password, ...others } = user._doc;
    const pwd = CryptoJS.AES.decrypt(
      user.password ,process.env.CRYPTO_KEY
    ).toString(CryptoJS.enc.Utf8);
    console.log(user.nev +" : "+ pwd );

    if(pass ==  pwd){
      console.log("Belépve: 😃");
      console.log(user);
      res.status(200).json(user);
    }
    else{
      console.log("Hibás jelszó: 🙁");
      res.status(404).json(error.message);
    } 
    
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { oneUser };
