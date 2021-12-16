import React, { useState } from 'react';
import './navbar.css';
import Logo from "../../../assets/logo.png"
import carrito from "../../../assets/carrito.png"
import { Container, LogoContainer, Menu, MenuItems, MenuLink, MobileIcon, Wrapper } from './navbar-elements'
import { FaAlignRight } from "react-icons/fa";
import {
  Link
} from "react-router-dom";

const Navbar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);


  return (

    <Container>
      <Wrapper>
        <LogoContainer className='logo'>
          <img src={Logo} />
        </LogoContainer>
        <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <FaAlignRight></FaAlignRight>
        </MobileIcon>

        <Menu open={showMobileMenu}>
          <MenuItems>
            <MenuLink>
              <Link className='link' to="/">Nosotros</Link>
            </MenuLink>
          </MenuItems>
          <MenuItems>
            <MenuLink>
              <Link className='link' to="/Menu">Menu</Link>
            </MenuLink>
          </MenuItems>
          <MenuItems>
            <MenuLink>
              <Link className='link' to="/Contactos">Contactanos</Link>
            </MenuLink>
          </MenuItems>
          <MenuItems>
            <MenuLink>
              <img src={carrito} />
            </MenuLink>
          </MenuItems>
        </Menu>
      </Wrapper>
    </Container>

  );
}

export default Navbar;
