import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaHome, FaShoppingCart } from 'react-icons/fa';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <FaShoppingCart /> TIENDA DE SEGUROS
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">
            <FaHome /> Home
          </Nav.Link>
          <Nav.Link href="/seguros-patrimoniales">Productos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
