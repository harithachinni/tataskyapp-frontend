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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
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
              <NavLink href="/request">Request</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/recharge">Recharge</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/allproducts">Packs</NavLink>
            </NavItem>
            
          </Nav>
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Account
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavItem>
                <NavLink href="/userprofile">Account</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                <NavItem>
                <NavLink href="/logout">Log Out</NavLink>
                </NavItem>
                </DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;