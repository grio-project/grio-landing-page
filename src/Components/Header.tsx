import React, { Component } from 'react';
<<<<<<< HEAD
//@ts-ignore
import { Navbar, Nav} from 'react-bootstrap'
import GrioLogo from '../assets/logos/LOGOTIPO_GRIÔ_Prancheta 1 (200x45).png'

class Header extends Component
{
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Brand>
            <img
              src={GrioLogo}              
            />
          </Navbar.Brand>
          
          
        </Navbar>
        
=======

class Header extends Component {
  render() {
    return (
      <div>
        <p>Header</p>
>>>>>>> feat(React App): Implements basic app structure
      </div>
    );
  }
}

export default Header;
