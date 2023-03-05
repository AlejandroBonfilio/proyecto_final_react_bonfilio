//renderizar aca barra de menu
//crear el menu ecomerce del proyecto
//categorias --- home - coleccionables - indumentaria - perifericos - juegos
//usar bootstrap               


import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Cart from "../CartWidget/CartWidget.js";
import logo from "../../images/Geek Hunt_free-file (1).png";

function NavBar(props) {
  return (
    <Navbar className="navbar" expand="lg">
      <Navbar.Brand href="#">
      <img src={logo} alt="Logo de la marca" className="brand-logo" />
        {props.brandName}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Coleccionables</Nav.Link>
          <Nav.Link href="#">Indumentaria</Nav.Link>
          <Nav.Link href="#">Periféricos</Nav.Link>
          <Nav.Link href="#">Juegos</Nav.Link>
        </Nav>
        <Nav>
          <Cart cartCount={props.cartCount} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;