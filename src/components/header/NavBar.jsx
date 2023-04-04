import Brand from "./Brand";
import Category from "./Category";
import CartWidget from "./CartWidget";
import { Navbar, Nav } from "react-bootstrap";


const NavBar = () => {
  return (
    <Navbar className="navbar" expand="lg">
    
            <Navbar.Brand> 
            <div className="containerBrand">
                <Brand />
            </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Category 
                    
                    itemUno = "Coleccionables"
                    itemDos = "Periféricos"
                    itemTres = "Juegos"
                    itemCuatro = "Indumentaria"
                />
            </Nav>
            <Nav>
            <div className="containerCart">
                <CartWidget />
            </div>
            </Nav>
            
            </Navbar.Collapse>
           
        
    
    </Navbar>
  );
};

export default NavBar;
