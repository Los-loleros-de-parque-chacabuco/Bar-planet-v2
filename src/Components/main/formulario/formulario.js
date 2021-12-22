import React from "react";
import "./formulario.css"
import Moon from '../../../assets/moon.png'
import Ete from '../../../assets/ete.png'

function Formulario() {
    return (
        <>
           <div className="Contacto" id="contacto">
                <div className="animacion-moon">
                    <img className="moon" src={Moon} width="300px" height="280px"></img>
                </div>
                <div className="animacion-ete">
                    <img className="ete" src={Ete} width="150px" height="150px"></img>
                </div>
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