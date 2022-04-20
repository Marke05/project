import "../App.css";
import React from "react";
import "./Logreg.css";

function Reg(){

    return(
        <form className="page" action="http://localhost:5000/api/user/feltolt" method="post">
            <img id="autoreg" src={require("../kepek/reg.png")} alt="auto" />
        <div className="reglog1">
            <br />
            <input type="email" id="email" placeholder="e-mail cím..." name="email"/><br /><br />
            <input type="text" id="nev" placeholder="felhasználónév..." name="nev"/><br /><br />
            <input type="password" id="password" placeholder="jelszó..." name="password"/><br /><br />
            <button type="submit" >Regisztrálás</button>
        </div>
            
        </form>
    );
}
export default Reg;