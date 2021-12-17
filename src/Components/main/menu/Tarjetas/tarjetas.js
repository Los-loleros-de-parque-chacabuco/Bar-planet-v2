import React from "react";
import "./tarjetas.css"
import productos from "../../../../objeto/objeto";
import { Link } from 'react-router-dom'
import TituloPrincipal from "../../../tipografias/titulos-principales/titulos-principales"

function Tarjetas(){
    return(
    <div className="tarjetas">
    {productos.map(producto => {
return(
<div key={producto.estrellas.id}> 
<h1>{productos.estrellas.nombre}</h1>
{/* <Link to={`descripcion-producto/${producto.id}`}/>  */}
</div>  
);
})}
 </div>       

    );
}
export default Tarjetas;

{/* <Tarjeta key={pelicula.id}>
                        <Link to={`peliculaDetalle/${pelicula.id}`} style={{ textDecoration: 'none', color: 'white' }}>
                            <ContenedorCentrado>
                                <TarjetaImg src={`${base_url_img}${pelicula.poster_path}`} />
                                <TituloPelicula width="200px" align="center">{pelicula.original_name}{pelicula.original_title}</TituloPelicula>
                            </ContenedorCentrado>
                        </Link>
                    </Tarjeta>

                ) */}
