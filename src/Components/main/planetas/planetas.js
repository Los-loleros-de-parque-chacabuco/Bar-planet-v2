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
                            <TextoClaro contenido="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing congue adipiscing cursus dapibus enim enim. Lacus senectus tristique sed blandit volutpat. Pulvinar arcu consectetur a vel est consequat enim massa. Nisl ipsum nunc suspendisse quis dui sed ac. Eu mi diam diam interdum sit odio. Nulla a pretium, augue sit. Euismod vitae vitae sed nisi. At egestas ut urna, velit faucibus."></TextoClaro>
                        </div>
                    </div>
                </div>
                <div className="Planeta two">
                    <div data-aos="zoom-in" className="Planeta-two">
                        <div className="titulo">
                                <TituloPrincipal contenido="Dónde estamos"></TituloPrincipal>
                        </div>
                        <div className="parrafo">
                            <TextoClaro contenido="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing congue adipiscing cursus dapibus enim enim. Lacus senectus tristique sed blandit volutpat. Pulvinar arcu consectetur a vel est consequat enim massa. Nisl ipsum nunc suspendisse quis dui sed ac. Eu mi diam diam interdum sit odio. Nulla a pretium, augue sit. Euismod vitae vitae sed nisi. At egestas ut urna, velit faucibus. "></TextoClaro>
                        </div>
                    </div>
                </div>
                <div className="Planeta three">
                    <div data-aos="zoom-in" className="Planeta-three">
                        <div className="titulo">
                            <TituloPrincipal contenido="Cómo hacemos los envíos"></TituloPrincipal>
                        </div>
                        <div className="parrafo">
                            <TextoClaro contenido="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing congue adipiscing cursus dapibus enim enim. Lacus senectus tristique sed blandit volutpat. Pulvinar arcu consectetur a vel est consequat enim massa. Nisl ipsum nunc suspendisse quis dui sed ac. Eu mi diam diam interdum sit odio. Nulla a pretium, augue sit. Euismod vitae vitae sed nisi. At egestas ut urna, velit faucibus. "></TextoClaro>
                        </div>
                    </div>
                </div>
            </div>
        
       </>
    );
}
 export default Planetas;
