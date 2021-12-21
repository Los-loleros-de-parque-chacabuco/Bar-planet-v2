import React from "react";
import "./comida.css"


const Comida = ({ comida, cart, setCart, comidas }) => {
    const { nombre, precio, descripcion, id, imagen }= comida;
// Funcion para agregar comida al carito    
    const addComida = (id) => {
        const comidaFilter = comidas.filter((comida) => comida.id === id);
        setCart([...cart, ...comidaFilter]);
       
    };

    //Funcion para elinimar comida del carrito
    const delComida = (id) => {
        const comidasFilter = cart.filter((comida) => comida.id !== id);
        setCart(comidasFilter);
      
    };

    return (
        <div className="hola">
            <ul>
                <img src={imagen} className="imagenes"></img>
                <li>{nombre} </li>
                <li>{descripcion}</li>
                <li>Θ{precio}</li>

                {comidas ? (

                    <button type="button" className="buttons" onClick={() => addComida(id)}> Agregar al carrito </button>
                ) : (

                    <button type="button" className="buttons" onClick={() => delComida(id)}> Eliminar </button>
                )}
            </ul>
        </div>
    );
};
export default Comida;