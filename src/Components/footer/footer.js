import react from "react";
import "./footer.css"
import TextoOscuro from "../tipografias/textos/texto-oscuro";
import Instagram from "../../assets/instagram.png"
import Mail from "../../assets/mail.png"
function Footer() {
    return (
        <div className="footer-contain">
            <div className="footer">
                <div data-aos="zoom-in" className="nosotros">
                    <TextoOscuro contenido="Nosotros"></TextoOscuro>
                </div>
                <div data-aos="zoom-in" className="menu">
                    <TextoOscuro contenido="Menu"></TextoOscuro>
                </div>
                <div data-aos="zoom-in" className="contactanos">
                </div>
                <div data-aos="zoom-in" className="carrito">
                    <TextoOscuro contenido="Carrito"></TextoOscuro>
                </div>
            </div>
            <div data-aos="zoom-in" className="redes">
                <TextoOscuro contenido="Redes"></TextoOscuro>
               <div className="instagram">
                    {/* <TextoOscuro contenido="Contactanos"></TextoOscuro> */}
                    <img src={Instagram} width="35px" height="35px"></img>
                    <TextoOscuro contenido="barplanet.restobar"></TextoOscuro>
               </div>
                <div className="mail">
                    <img src={Mail} width="35px" height="35px"></img>
                    <TextoOscuro contenido="barplanet@gmail.com"></TextoOscuro>
                </div>
            </div>
        </div>
    );
}

export default Footer;