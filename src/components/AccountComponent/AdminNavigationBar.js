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
export const AdminNavigationBar = () => (
  <Styles >
    <Navbar expand="lg">
      <Navbar.Brand href="/adminhomepage"></Navbar.Brand>
      
      <div class="logo-image"><a href="/adminhomepage">
      <img src={tatasky} width="150" height="40"></img></a>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          
          <Nav.Item><Nav.Link href="/countaccount">CountAccount</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/getaccountbyid">GetAccount</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/allRecharges">AllRecharge</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/getrechargesbyaccount">RechargesbyAccount</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/rechargescount">RechargeCount</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/RechargesCountOnPack">RechargesCountOnPack</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/logout">Logout</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

export default AdminNavigationBar;