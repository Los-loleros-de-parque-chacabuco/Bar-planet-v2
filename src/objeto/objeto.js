import React, { Fragment, useState } from "react";
import "./objeto.css";
import Comida from "./comida/comida";
import Carrito from "./comida/carrito";
import Tiramisu from"../assets/Comidas/tiramisu.jpg"
import Licuado from"../assets/Comidas/licuado.jpg"
import Gusanos from"../assets/Comidas/gusanos.jpg"
import Canastas from"../assets/Comidas/canastas.jpg"
import Moho from"../assets/Comidas/Moho.jpg"
import Babosas from"../assets/Comidas/babosas.jpg"
import Polvillo from"../assets/Comidas/polvillo.jpg"
import Dedo from"../assets/Comidas/dedo.jpg"
import Sesos from"../assets/Comidas/sesos.jpg"
import Discos from"../assets/Comidas/discos.jpg"


function Objeto() {
  const [comidas, setComidas] = useState([
    {
      nombre: "Tiramisu de algas espaciales",
      descripcion: "El tiramisú de algas espaciales es un pastel frío que se monta en capas de algas del mar senico lunar y se deja fermentar en los fociles de un marciano Θ Ι Κ Λ",
      precio: 650,
      imagen:Tiramisu,
      id: "Tiramisu de algas espaciales",
    },
    {
      nombre: "Licuado de vomito de alien",
      descripcion: "Preparación de frutas, verduras y cereales.Batidas en el intestino de un alien bebe",
      precio: 250,
      imagen:Licuado,
      id: "Licuado de vomito de alien",

    },
    {
      nombre: "Gusanos lunares secos",
      descripcion: "Gusanos extraidos de crateres lunares a los cuales se les aplica un proseso de sacado en nuestra seca todo 3000  Φ Χ",
      precio: 400,
      imagen:Gusanos,
      id: "Gusanos lunares secos",
    },
    {
      nombre: "Canastitas satelitales",
      descripcion: "La especialidad de la casa estas canastas estan bañadas en saliva de vaca lunar y condimetada con cebolla de verdeo de las grietas de Saturno,un solo mordisco y quedas bizco",
      precio: 750,
      imagen:Canastas,
      id: "Canastitas satelitales",
    },
    {
      nombre: "Moho de nave abandonada en el espacio ",
      descripcion: "Hace mas de 500 años una nave fue abandonada y desde el espacio cayo en patio de nuestro chef , despues de probar la extraña sustacia que recubria las paredes lo añadio a nuestro menu.Disfuta de esta sustancia en peligro de extincion",
      precio: 2000,
      imagen:Moho,
      id: "Moho de nave abandonada en el espacio",
    },
    {
      nombre: "Babosas regurgitadas de estrella fugaz",
      descripcion: "Es un rollo elaborado de una pasta de humus  relleno de diferentes verduras picadas al estilo Yoda y algo de carne de procedensia desconocida",
      precio: 600,
      imagen:Babosas,
      id: "Babosas regurgitadas de estrella fugaz",
    },
    {
      nombre: "Polvillo de estrella",
      descripcion: "Cada grano de este polvillo de estrellas equivale a 2 platillos de nuestro bar, si estas en apuros este es el platillo para ti  ",
      precio: 1200,
      imagen:Polvillo,
      id: "Polvillo de estrella",
    },
    {
      nombre: "Guarnicion de dedo berenjenoso",
      descripcion: "Planta lunar comestible, generalmente anual, del género Buki, la cual se somete a una fritura en las llamas del sol y se acompaña con finas especies de extraidas del nucleo de Venus",
      precio: 850,
      imagen:Dedo,
      id: "Guarnicion de dedo berenjenoso",
    },
    {
      nombre: "Sesos de Kriptoniano",
      descripcion: "Un plato que combina sesos fríos y varios instestinos  cortados, mezclados y aderezados con sal de Jupiter, aceite de Meep y vinagre de pasta dental de astronauta albino a las que se suelen añadir otros alimentos.",
      precio: 775,
      imagen:Sesos,
      id: "Sesos de Kriptoniano",
    },
    {
      nombre: "Discos reptilianos",
      descripcion: "Disco plano, redondo en cual puede ser salado o dulce, cuya masa de huesos de reptiliano contiene pelo de stormtrooper y está levadurizada.Incluye tambien especias de la corteza de Marte, esencias de la Tierra y aromatizantes de agujero negro",
      precio: 900,
      imagen:Discos,
      id: "Discos reptilianos",
    },
  ])
  //CARRITO DE COMPRA
  const [cart, setCart] = useState([]);

  return (
    <Fragment>
      <h3>Comida</h3>
      {comidas.map((comida) => (
        <Comida
          key={comida.id}
          comida={comida}
          cart={cart}
          setCart={setCart}
          comidas={comidas}
        />

      ))}
      <Carrito
        cart={cart}
      />
    </Fragment>
  );

}
export default Objeto;
