import React from 'react';
import './textos.css';

function TextoMorado(props) {
    return (
      <p className='texto-morado'>{props.contenido}</p>
    );
  }
  
  export default TextoMorado;