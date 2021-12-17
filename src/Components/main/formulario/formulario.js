import React from "react";
import "./formulario.css"

function Formulario() {
    return (
        <div className="formulario">
            <div className="Contacto" id="contact">
                <div className="row">
                    <div className="col-md-12">
                        <form method="post" action="">
                            <ul className="contact-form">
                                <li>
                                    <div className="col-md-6">
                                        <input name="nombre" placeholder="Nombre" required="required" size="8"
                                            type="text" />
                                    </div>

                                    <div className="col-md-6">
                                        <input name="apellido" placeholder="Apellido" required="required" size="8" type="text" />
                                    </div>
                                </li>

                                <li>
                                    <div className="col-md-12">
                                        <input name="email" placeholder="Email"
                                            required="required" size="8" type="email" />
                                    </div>
                                </li>
                                <li>
                                    <div className="col-md-6">
                                        <input name="telefono" placeholder="Numero de telefono" required="required" size="8"
                                            type="text" />
                                    </div>
                                </li>

                                <li>
                                    <div className="col-md-12">
                                        <textarea class="span12" name="mensaje" placeholder="Mensaje" required="required"></textarea>
                                    </div>
                                </li>
                            </ul>
                        </form>
                        <li>
                                <div className="col-md-12">
                                    <button className="boton"> 
                                Contactanos
                                        <span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span>
                                    </button>
                                </div>
                            </li>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Formulario;