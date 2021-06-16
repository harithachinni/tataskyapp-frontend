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

const AdminHeader = (props) => {
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
        
        <NavbarText><h5>Welcome  to  Admin  Login  Page  of  Tata  Sky</h5></NavbarText>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AdminHeader;