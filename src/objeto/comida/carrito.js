import React from "react";
import "./carrito.css";
import Comida from "./comida";

const Carrito = ({cart ,setCart}) => {
    return (
        <div>
            <h3 className="carrito">Carrito</h3>
            {cart.length === 0 ? (<p>0</p>) : (cart.map((comida =><Comida key={comida.id} comida={comida} cart={cart} setCart={setCart}/>)))}
        </div>
    );
}

export default Carrito;