import "./Autok.css";
import React from "react";


class Autok extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        autok: []
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:5000/api/auto/autok")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              autok: result
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, autok } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        
        return (
         
          <form className="pageautok" >
            {autok.map(auto => ( 
            <ul>
              
                
              <li id="auto" key={auto._id}>
                <img id="kep" src={require("../../public/kepek/" + auto.kep)} alt={auto.kep} /><br />
                
                  <p>Marka: {auto.marka}</p>
                  <p>Uzemanyag: {auto.elektromos}</p >
                  <p>Ára: {auto.ar} ft.</p >
                  <input className="hidden" type="text" id="marka" value={auto.marka}/>
                  <input className="hidden" type="text" id="uzemanyag" value={auto.elektromos}/>
                  <input className="hidden" type="text" id="ar"  value={auto.ar}/>
                  <select  id={"szin" + auto._id} >szin
                    <option value="fekete">fekete</option>
                    <option value="szurke">szurke</option>
                    <option value="kek">kek</option>
                    <option value="zold">zold</option>
                    <option value="piros">piros</option>
                  </select> <br /><br />
                  <input type="email" id={"rendeloemail"+ auto._id} placeholder="email..."/> <br /> <br />
                 <input type="text" id={"szemelyiszam"+ auto._id} placeholder="szemelyi szam..."/> <br /><br />
                 <button onClick={(e) => {
                   e.preventDefault();
                   const marka = auto.marka;
                   const ar = auto.ar;
                   const uzemanyag = auto.elektromos;
                   const szin = document.getElementById("szin"+auto._id).value;
                   const rendeloemail = document.getElementById("rendeloemail"+auto._id).value;
                   const szemelyiszam = document.getElementById("szemelyiszam"+auto._id).value;
                   const databody = { marka, ar,uzemanyag ,szin,rendeloemail,szemelyiszam };
                   fetch("http://localhost:5000/api/rendeles/feltolt", {
                     method: "POST",
                     body: JSON.stringify(databody),
                     headers: {
                       "Content-Type": "application/json",
                     },
                   })
                   .then(res => {
                     if(res.status === 200){
                       alert("sikeres megrendeles")
                     }
                     else{
                       alert("nem sikerult megrendelni")
                     }
                     res.json();
                    })
                   .then(data => console.log(data))
                   .catch((error) => console.log(error.message));
         
                   console.log(databody);
                
                 }}>Rendeles</button>
               
              </li>
           
          </ul>))}
          </form>
          
        ); 
      }
    }
  }
export default Autok;