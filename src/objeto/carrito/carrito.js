import React from "react";
import Comida from "../comida/comida";
import "./carrito.css";



const Carrito = ({cart ,setCart}) => {
    return (
        <div>
            <h3 className="carrito">Carrito</h3>
            {cart.length === 0 ? (<p className="color">Compra algo raton</p>) : (cart.map((comida =><Comida key={comida.id} comida={comida} cart={cart} setCart={setCart}/>)))}
      </div>
    );
}

export default Carrito;