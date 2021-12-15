import React,{useState} from 'react';
import './navbar.css';
import Logo from "../../../assets/logo.png"
import {Container, LogoContainer, Menu, MenuItems, MenuLink, MobileIcon, Wrapper} from './navbar-elements'
import { FaAlignRight } from "react-icons/fa";
const Navbar = () => {
  
  const [showMobileMenu, setShowMobileMenu]= useState(false);


  return (
    <Container>
      <Wrapper>
        <LogoContainer className='logo'>
          <img src={Logo}/>
        </LogoContainer>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <FaAlignRight></FaAlignRight>
          </MobileIcon>

        <Menu open={showMobileMenu}>
          <MenuItems>
            <MenuLink>
              Nosotros          
            </MenuLink>
          </MenuItems>
          <MenuItems>
            <MenuLink>
              Menu          
            </MenuLink>
          </MenuItems>
          <MenuItems>
            <MenuLink>
              Contactanos          
            </MenuLink>
          </MenuItems>
          <MenuItems>
            <MenuLink>
              Carrito          
            </MenuLink>
          </MenuItems>
        </Menu>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
