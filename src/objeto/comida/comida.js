import React from "react";
import "./comida.css"


const Comida = ({ comida, cart, setCart, comidas }) => {
    const { nombre, precio, descripcion, id, imagen } = comida

    // Funcion para agregar comida al carito    
    const addComida = (id) => {
        const comida = comidas.filter((comida) => comida.id === id);
        setCart([...cart, ...comida])
    };
    //Funcion para elinimar comida del carrito
    const delComida = (id) => {
        const comidas = cart.filter(comida => comida.id !== id)
        setCart(comidas)
    };

    return (
        <div className="hola">
            <ul>
                <img src={imagen} className="imagenes"></img>
                <li>{nombre} </li>
                <li>{descripcion}</li>
                <li>${precio}</li>

                {comidas ? (

                    <button type="button" onClick={() => addComida(id)}> Agregar al carrito </button>
                ) : (
                    <button type="button" onClick={() => delComida(id)}>Eliminar</button>
                )}
            </ul>
        </div>
    );
};
export default Comida;