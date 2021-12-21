import React from "react";
import "./formulario.css"
import Titulo from "../../tipografias/titulos-master/titulos-master"
import TituloMaster from "../../tipografias/titulos-master/titulos-master";
function Formulario() {
    return (
        <>
            <div className="Contacto" id="contacto">
                <div className="formulario">
                    <form className="form" action="https://formsubmit.co/bar.planet98@gmail.com" method="POST">
                        <input type="hidden" name="_subject" value="New submission!" />
                        <input name="nombre" placeholder="Nombre" className="name" required />
                        <input type="text" name="apellido" placeholder="Apellido" />
                        <input type="email" name="email" placeholder="Email" />
                        <input type="text" name="telefono" placeholder="Teléfono" />
                        <textarea name="Mensaje" placeholder="Mensaje" className="asunto" required></textarea>
                        <button type="submit" value="Enviar" className="enviar_btn">Enviar</button>
                    </form>
                </div>
            </div>

        </>
    );
}
export default Formulario;