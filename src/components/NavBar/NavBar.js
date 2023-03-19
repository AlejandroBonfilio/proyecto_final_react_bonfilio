import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Cart from "../CartWidget/CartWidget.js";
import logo from "../../images/Geek Hunt_free-file (1).png";

function NavBar(props) {
  return (
    <Navbar className="navbar" expand="lg">
      <Navbar.Brand>
        <NavLink to="/" className="nav-link">
          <img src={logo} alt="Logo Geek Hunt" className="brand-logo" />
          {props.brandName}
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink to="/" className="nav-link">
            Inicio
          </NavLink>
          <NavLink to="/coleccionables" className="nav-link" >
            Coleccionables
          </NavLink>
          <NavLink to="/perifericos" className="nav-link" >
            Periféricos
          </NavLink>
          <NavLink to="/juegos" className="nav-link">
            Juegos
          </NavLink>
        </Nav>
        <Nav>
          <Cart cartCount={props.cartCount} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
