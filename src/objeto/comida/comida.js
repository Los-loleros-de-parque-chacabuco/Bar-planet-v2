import React from "react";
import "./comida.css";
import swal from 'sweetalert';



const Comida = ({ comida, cart, setCart, comidas }) => {
    const { nombre, precio, descripcion, id, imagen } = comida;
    // Funcion para agregar comida al carito    
    const addComida = (id) => {
        const comidaFilter = comidas.filter((comida) => comida.id === id);
        setCart([...cart, ...comidaFilter]);

    };

    //Funcion para elinimar comida del carrito
    // const delComida = (id) => {
    //     const comidasFilter = cart.filter((comida) => comida.id !== id);
    //     setCart(comidasFilter);

    // };

    const Alerta = () => {
        swal({
            title: "Realizaste la compra",
            Text: "gracias por su compra",
            icon: "success",
            button: "aceptar"
        });
    }

    function refreshPage() {
        window.location.reload();
    }

  

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

                    <>
                        <button type="button" className="buttons" onClick={refreshPage}> <span>Vaciar carrito</span> </button>
                        <button type="button" className="buttons" onClick={Alerta}> <span>Comprar</span> </button>
                    </>
                )}
            </ul>
        </div>
    );
};
export default Comida;
