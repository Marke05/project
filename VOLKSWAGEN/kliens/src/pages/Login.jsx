import "../App.css";
import React,{useState,useEffect} from "react";
import "./Logreg.css";

function Login(){

  
  const [data,setData]=useState([]);
  const getData=()=>{
    const nev = document.getElementById("nev").value;
    const password = document.getElementById("password").value;
    const databody = {nev,password}
    fetch("http://localhost:5000/api/user/letolt",
      { method: "POST",
        body: JSON.stringify(databody),
        headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json'
        },
    }).then(function(response){
      console.log(response)
      return response.json();
    }).then(function(myJson) {
      console.log(myJson);
      setData(myJson)
    });
  }

    return(
        <form className="page">
          <img id="autolog" src={require("../kepek/log.png")} alt="auto" />
          <div className="reglog1">
            <br /> <br />
            <input type="text" id="nev" placeholder="felhasználónév..." name="nev"/><br /><br />
            <input type="password" id="password" placeholder="jelszó..." name="password"/><br /><br />
            <button onClick={(e) => getData()} >Login</button>
          </div>
        </form>
    );
}
export default Login;