import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Reg from "./pages/Reg";
import Home from "./pages/Home";
import Rolunk from "./pages/Rolunk";
import Login from "./pages/Login";
import Autok from "./pages/Autok";

const isloged = "";


function App() {
  
  return (
    <Router>
      { <Navbar sticky="top"/> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route id="reg" path="/reg" element={<Reg />} />
        <Route id="login" path="/login" element={<Login />} />
        <Route path="/rolunk" element={<Rolunk />} />
        <Route path="/autok" element={<Autok />} />
      </Routes>
    </Router>
  );
}

export default App;
