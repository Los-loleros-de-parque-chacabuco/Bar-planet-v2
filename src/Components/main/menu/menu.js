import React from "react";
import "./menu.css"
import TituloMaster from "../../tipografias/titulos-master/titulos-master";
import Objeto from "../../../objeto/objeto";

function Menu() {
    return (
        <>
        <TituloMaster contenido={"Menú"}></TituloMaster>
        <Objeto/>
        </>
    );
}
export default Menu;