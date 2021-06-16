import React, { useState } from 'react';
import tatasky from './tata-sky-logo.png'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
        <img src={tatasky} 
        width="150"
        height="50"
        
      /></NavbarBrand> 

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/aboutus">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Quick Recharge</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Packs</NavLink>
            </NavItem>
            
          </Nav>
          <NavbarText>Welcome to All New & Exciting Tata Sky</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;