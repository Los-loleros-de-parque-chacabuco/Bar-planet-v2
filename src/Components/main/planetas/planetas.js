import React from "react";
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
                            <TextoClaro contenido="Somos un bar creado desde el BigBang con  una oferta gastronomica de otra galaxia,les proveeremos las delicias mas exoticas de cada rincon del espacio.Hace dos años nos reconocieron con la certifiacion Tupakupa al mejor bar de la toda la galaxia.En el vas a gozar de una expereicnia de otro planeta , ideal para venir con amigos o pareja"></TextoClaro>
                        </div>
                    </div>
                </div>
                <div className="Planeta two">
                    <div data-aos="zoom-in" className="Planeta-two">
                        <div className="titulo">
                                <TituloPrincipal contenido="Dónde estamos"></TituloPrincipal>
                        </div>
                        <div className="parrafo">
                            <TextoClaro contenido="Nos encontramos a la vuelta de la tu Galaxia más cercana ya que tenemos distintos portales que te permitirán estar en un santiamén en  nuestro recinto.En caso de que quieras venir con tu nave , Speeder o tu Pod de carreras contaras con un estacinamiento en el cual es totalmente gratis"></TextoClaro>
                        </div>
                    </div>
                </div>
                <div className="Planeta three">
                    <div data-aos="zoom-in" className="Planeta-three">
                        <div className="titulo">
                            <TituloPrincipal contenido="Cómo hacemos los envíos"></TituloPrincipal>
                        </div>
                        <div className="parrafo">
                            <TextoClaro contenido="Hacemos envios a toda la galaxia , si estas a mas de 3 años luz te cobramos Θ75 Zardcoins,gracias a nuestro sistemas de teletrasportacion te aseguramos que la comida llegue calentita y con un sabor que te hara volar tus papilas gustativas"></TextoClaro>
                        </div>
                    </div>
                </div>
            </div>
        
       </>
    );
}
 export default Planetas;
