import react from "react";
import "./planetas.css"
import TituloPrincipal from "../../tipografias/titulos-principales/titulos-principales"
import TextoClaro from "../../tipografias/textos/texto-claro"
function Planetas(){
    return(
        <>
            <div className="Planetas-contain">
                <div className="Planeta one">
                    <div data-aos="zoom-in" className="Planeta-one">
                        <div className="titulo">
                            <TituloPrincipal contenido="Nosotros"></TituloPrincipal>
                        </div>
                        <div className="parrafo">
                            <TextoClaro contenido="hola como anda la banda gedienta que ama que le festejen el cumple a Rodri"></TextoClaro>
                        </div>
                    </div>
                </div>
                <div className="Planeta two">
                    <div data-aos="zoom-in" className="Planeta-two">
                        <div className="titulo">
                                <TituloPrincipal contenido="Nosotros"></TituloPrincipal>
                        </div>
                        <div className="parrafo">
                            <TextoClaro contenido="hola como anda la banda gedienta que ama que le festejen el cumple a Rodri "></TextoClaro>
                        </div>
                    </div>
                </div>
                <div className="Planeta three">
                    <div data-aos="zoom-in" className="Planeta-three">
                        <div className="titulo">
                            <TituloPrincipal contenido="Nosotros"></TituloPrincipal>
                        </div>
                        <div className="parrafo">
                            <TextoClaro contenido="hola como anda la banda gedienta que ama que le festejen el cumple a Rodri"></TextoClaro>
                        </div>
                    </div>
                </div>
            </div>
        
       </>
    );
}
 export default Planetas;
