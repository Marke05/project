import "../App.css";
import React from "react";
import "./Logreg.css";

function Reg(){

    return(
        <form className="page">
            <img id="autoreg" src={require("../kepek/reg.png")} alt="auto" />
        <div className="reglog1">
            <br />
            <input type="email" id="email" placeholder="e-mail cím..." name="email"/><br /><br />
            <input type="text" id="nev" placeholder="felhasználónév..." name="nev"/><br /><br />
            <input type="password" id="password" placeholder="jelszó..." name="password"/><br /><br />
            <button onClick={(e) => {
                   e.preventDefault();
                   const nev = document.getElementById("nev").value;
                   const email = document.getElementById("email").value;
                   const password = document.getElementById("password").value;
                   const databody = { nev, email,password };
                   fetch("http://localhost:5000/api/user/feltolt", {
                     method: "POST",
                     body: JSON.stringify(databody),
                     headers: {
                       "Content-Type": "application/json",
                     },
                   })
                   .then(res => {
                     if(res.status === 200){
                       alert("regisztralt");
                     }
                     else{
                       alert("nem sikerult registralni");
                     }
                     res.json();
                    })
                   .then(data => console.log(data))
                   .catch((error) => console.log(error.message));
         
                   console.log(databody);
                
                 }} >Regisztrálás</button>
        </div>
            
        </form>
    );
}
export default Reg;