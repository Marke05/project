import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {

  

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
};
export default Navbar;