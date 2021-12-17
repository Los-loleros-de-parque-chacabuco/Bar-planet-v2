import React from "react";
import "./contactos.css"
import TituloMaster from "../../tipografias/titulos-master/titulos-master";
import Formulario from "../formulario/formulario";
function Contactos() {
    return (
        <>
            <TituloMaster contenido={"Contáctanos"}></TituloMaster>
            <Formulario />
        </>
    );
}
export default Contactos;