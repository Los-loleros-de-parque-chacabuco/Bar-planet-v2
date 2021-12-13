import React from 'react';
import './textos.css';

function TextoOscuro(props) {
    return (
      <p className='texto-oscuro'>{props.contenido}</p>
    );
  }
  
  export default TextoOscuro;