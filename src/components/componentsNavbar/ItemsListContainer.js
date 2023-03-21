import { Link } from "react-router-dom"
import { Navbar, Nav, NavLink } from "react-bootstrap";

const ItemListContainer = (props) => {
    return(
        
        <Nav className="mr-auto">
                <Link to="category/coleccionables" className="nav-link"> 
                    {props.itemUno} 
                </Link>
           

           
                <Link to="category/perifericos" className="nav-link">
                    {props.itemDos}
                </Link>
            

            
                <Link to="category/juegos" className="nav-link">
                    {props.itemTres}
                </Link>
           

           
                <Link to="category/indumentaria" className="nav-link">
                    {props.itemCuatro}
                </Link>
            
                </Nav>
    )
}

export default ItemListContainer;

