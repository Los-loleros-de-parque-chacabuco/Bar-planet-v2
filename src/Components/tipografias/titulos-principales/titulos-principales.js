import React from 'react';
import './titulos-principales.css';

function TituloPrincipal(props) {

    return (
      <h2 className="titulo-principal">{props.contenido}</h2>
    );
  }
  
  export default TituloPrincipal;