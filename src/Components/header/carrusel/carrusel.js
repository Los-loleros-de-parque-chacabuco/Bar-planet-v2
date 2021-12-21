import React from "react";
import "./carrusel.css";
import bg from "../../../assets/bg.svg"
import TituloPrincipal from "../../tipografias/titulos-principales/titulos-principales";
function Carrusel() {
    return (
        <div className="carrusel">
            <div data-aos="fade-up" className="carrusel-title">
                <TituloPrincipal contenido={"BAR PLA-NET"}></TituloPrincipal>
            </div>
        </div>
    );
}

export default Carrusel;