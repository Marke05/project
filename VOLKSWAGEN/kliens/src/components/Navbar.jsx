import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import setUser from"../pages/Login";

const Navbar = () => {
  

  //if(token == ""){
    return (
    <div className="navdiv">
      <div>
        <ul className="ulnav">
          <li><Link className="links" to="/">Home</Link></li>
          <li><Link className="links" to="/autok">Autok</Link></li>
          <li><Link className="links" to="/rolunk">Rolunk</Link></li>
          <li><Link className="reglog" to="/reg">Regisztracio</Link></li>
          <li><Link className="reglog" to="/login">Bejelentkezes</Link></li>
          <img id="logo" src={require("../kepek/vwlogo.png")} alt="vwlogo.png" />
        </ul>
      </div>
    </div>
  );
  /*}
  else{
    return (
      <div className="navdiv">
        <div>
          <ul className="ulnav">
            <li><Link className="links" to="/">Home</Link></li>
            <li><Link className="links" to="/autok">Autok</Link></li>
            <li><Link className="links" to="/rolunk">Rolunk</Link></li>
            <button> Kijelentkezes</button>
            <h1>{token[1]}</h1>
            <img id="logo" src={require("../kepek/vwlogo.png")} alt="vwlogo.png" />
          </ul>
        </div>
      </div>
    );
  }*/

  
};
export default Navbar;