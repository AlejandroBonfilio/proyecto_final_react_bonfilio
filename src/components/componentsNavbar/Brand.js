import brand from "../../img/brand.svg";
import { Link } from "react-router-dom"

const Brand = () => {
    return(
        <Link to="/" className="nav-link">
          <img src={brand} alt="Logo Geek Hunt" className="brand-logo" />
          
        </Link>
    )
}

export default Brand;