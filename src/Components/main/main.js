import react from "react";
import "./main.css";
import Planetas from "./planetas/planetas";
import Clientes from "./clientes/clientes";

function Main() {
    return (
        <div className="main">
            <Planetas />
            <Clientes/>
        </div>
    );
}

export default Main;