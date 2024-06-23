import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import Group from '/Group.jpg';
import './Header.css';

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar px-2">
      <Navbar.Brand href="#">
        <img src={Group} alt="LogoImage" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-options ms-auto">
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Facilities</Nav.Link>
          <Nav.Link href="#">Training</Nav.Link>
          <Nav.Link href="#">Events</Nav.Link>
          <Nav.Link href="#">Team</Nav.Link>
          <Nav.Link href="#">Connect</Nav.Link>
          <Nav.Link href="#">Resources</Nav.Link>
          <div className="nav-button">
            <Button className="btn-involved">Get Involved</Button>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
