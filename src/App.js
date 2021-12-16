import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./Components/home/home"
import Navbar from './Components/header/navbar/navbar';
import Menu from './Components/main/menu/menu';
import Contactos from './Components/main/contactos/contactos';
import Footer from "./Components/footer/footer";

function App() {
  return (
    <div className="App">

      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/contactos" element={<Contactos/>} />
          <Route path="/menu" element={<Menu/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
