import { Link } from "react-router-dom";
import notfoundimage from "../img/404_image.png";

const NotFound = () => {
  return (
    <div style={{display: 'flex', flexDirection:'column', marginTop:'5rem', justifyContent:'center', alignItems:'center'}}>
      <img src={notfoundimage} alt="imagen" ></img>
      <Link to="/" style={{marginTop:'1rem', textDecoration:'none' }}>
        <span>
          Volver a la pagina principal
        </span>
      </Link>
    </div>
  );
};

export default NotFound;
