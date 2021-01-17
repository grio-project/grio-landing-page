import React, { Component } from 'react';
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
        
      </div>
    );
  }
}

export default Header;
