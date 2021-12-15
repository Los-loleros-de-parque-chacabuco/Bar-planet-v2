import React, { useEffect } from "react";
import "./clientes.css";
import TituloPrincipal from "../../tipografias/titulos-principales/titulos-principales"
import Texto from "../../tipografias/textos/texto-claro"
import Cliente1 from "../../../assets/Cliente1.png"
import Cliente2 from "../../../assets/Cliente2.png"
import Cliente3 from "../../../assets/Cliente3.png"
import TextoClaro from "../../tipografias/textos/texto-claro";
import Aos from "aos";
import "aos/dist/aos.css";


function Clientes() {

    useEffect(() =>{
        Aos.init({duration:2000});
    },[]);

    return (
        <>
          <div data-aos="fade-up" className="Titulo-clientes">
                <TituloPrincipal contenido="Que dicen nuestros clientes"></TituloPrincipal>
            </div>
                <div className="Clientes">
                    <div data-aos="fade-up" className="cliente-one">
                        <img className="img-cliente" src={Cliente1} width="220px" />
                        <TextoClaro contenido="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "></TextoClaro>
                    </div>
                    <div data-aos="fade-up" className="cliente-two">
                        <img className="img-cliente" src={Cliente2} width="220px" />
                        <TextoClaro contenido="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></TextoClaro>
                    </div>
                    <div data-aos="fade-up" className="cliente-three">
                        <img className="img-cliente" src={Cliente3} width="220px" />
                        <TextoClaro contenido="Lorem ipsum dolor sit amet, consectetur adipiscing elit."></TextoClaro>
                    </div>
                </div>
        </>
    );
}
export default Clientes;