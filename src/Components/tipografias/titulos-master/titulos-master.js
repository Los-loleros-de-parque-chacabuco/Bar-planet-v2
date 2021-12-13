import React from 'react';
import './titulos-master.css';

function TituloMaster(props) {

    return (
      <h1 className="titulo-master">{props.contenido}</h1>
    );
  }
  
  export default TituloMaster;