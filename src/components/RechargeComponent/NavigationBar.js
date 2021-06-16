import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import tatasky from './tata-sky-logo.png'


const Styles = styled.div`
  .navbar { background-color:#000;
    height : 75px }
  a, .navbar-nav, .navbar-light .nav-link {
    color: 	white;
    &:hover { color: white; };
    width : -166px;
    height : -164 px
  }
  .logo-image{
    width: 166px;
    height: 166px;
    overflow: hidden;
    margin-top: 116px;
    margin-below: 36px;
}
  .navbar-brand {
    font-size: 1.4em;
    color:  white;
    &:hover { color: white; }
    height : 166px
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  <Styles >
    <Navbar expand="lg">
      <Navbar.Brand href="/"></Navbar.Brand>
      
      <div class="logo-image"><a href="/homepage">
      <img src={tatasky} width="150" height="40"></img></a>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          
          
          <Nav.Item><Nav.Link href="/pack">Packs</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/addRecharge">AddRecharge</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/RechargeValidity">RechargeValidity</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/request">Request</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/userprofile">UserProfile</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/logout">Logout</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

export default NavigationBar;