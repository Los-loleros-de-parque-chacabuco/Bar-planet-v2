import React from 'react';
import './textos.css';

function TextoClaro(props) {
    return (
      <p className='texto-claro'>{props.contenido}</p>
    );
  }
  
  export default TextoClaro;