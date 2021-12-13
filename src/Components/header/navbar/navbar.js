import React from 'react';
import './navbar.css';
import Logo from "../../../assets/logo.png"
function Navbar() {
  return (
    <div className="contendorNav">
      <div className='logo'>
          <img src={Logo}/>
      </div>
      {/* <div className='navbar'>
        <button>Nosotros</button>
        <button>Menu</button>
        <button>Contactanos</button>
        <button>Carrito</button>
      </div> */}
    </div>
  );
}

export default Navbar;
