import Brand from "./Brand";
import ItemListContainer from "./ItemsListContainer";
import CartWidget from "./CartWidget";
import ContainerCart from "./ContainerCart";
import ContextCart from "./ContextCart";

import { Navbar, Nav } from "react-bootstrap";




const NavBar = () => {

    return (
    
        <Navbar className="navbar" expand="lg">
        <ContextCart>
                <Navbar.Brand> 
                <div className="containerBrand">
                    <Brand />
                </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <ItemListContainer 
                        
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
                <ContainerCart />
                </Navbar.Collapse>
               
            
        </ContextCart>
        </Navbar>
    )
}

export default NavBar;