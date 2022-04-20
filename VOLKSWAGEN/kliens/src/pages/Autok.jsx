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
            <ul>
              {autok.map(auto => (
                
              <li id="auto" key={auto._id}>
               <img id="kep" src={require("../../public/kepek/" + auto.kep)} alt={auto.kep} /><br />
               <label>Marka: {auto.marka}</label><br />
               <label>Uzemanyag: {auto.elektromos}</label><br />
               <label>Ára: {auto.ar} ft</label>   <br />
               <select name="szin" id="szin">szin
               <option value="benzin">fekete</option>
               <option value="benzin">szurke</option>
               <option value="benzin">kek</option>
               <option value="benzin">zold</option>
               <option value="benzin">piros</option>
               </select>
                <br /> <br />
               <input type="text" id="szemelyi" placeholder="szemelyi szam..."/> <br /><br />
               <button>Rendeles</button>
              </li>
           ))}
          </ul>
          </form>
          
        ); 
      }
    }
  }
export default Autok;