import "../App.css";
import React, { useState } from "react";
import "./Logreg.css";

function Login() {
  
  const getData = (e) => {
    e.preventDefault();
    const nev = document.getElementById("nev").value;
    const password = document.getElementById("password").value;
    const databody = { nev, password };
    fetch("http://localhost:5000/api/user/letolt", {
      method: "POST",
      body: JSON.stringify(databody),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch((error) => console.log(error.message));
    
  };

  return (
    <form className="page" onSubmit={getData}>
      <img id="autolog" src={require("../kepek/log.png")} alt="auto" />
      <div className="reglog1">
        <br /> <br />
        <input
          type="text"
          id="nev"
          placeholder="felhasználónév..."
          name="nev"
        />
        <br />
        <br />
        <input
          type="password"
          id="password"
          placeholder="jelszó..."
          name="password"
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </div>
    </form>
  );
}
export default Login;