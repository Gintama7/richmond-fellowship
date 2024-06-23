import React from 'react'
import { Button,Nav, Navbar, } from 'react-bootstrap';
import Group from '/Group.jpg';
import "./Header.css";

const Header = () => {
  return (
    <Navbar className="navbar justify-content-between px-2">
      <div>
        <img src={Group} alt="LogoImage" />
      </div>

      <Nav className="nav-options">
        <Nav.Link href="#">About</Nav.Link>
        <Nav.Link href="#">Facilites</Nav.Link>
        <Nav.Link href="#">Training</Nav.Link>
        <Nav.Link href="#">Events</Nav.Link>
        <Nav.Link href="#">Team</Nav.Link>
        <Nav.Link href="#">Connect</Nav.Link>
        <Nav.Link href="#">Resources</Nav.Link>
        <div>
          <Button className="btn-involved">Get Inovlved</Button>
        </div>
      </Nav>
    </Navbar>
  );
}

export default Header
