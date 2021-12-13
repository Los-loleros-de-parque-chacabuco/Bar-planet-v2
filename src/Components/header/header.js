import react from "react";
import "./header.css"
import Navbar from "../header/navbar/navbar"
import Carrusel from "../header/carrusel/carrusel"

function Header() {
    return (
        <div className="header">
            <Navbar />
            <Carrusel />
        </div>
    );
}
export default Header;