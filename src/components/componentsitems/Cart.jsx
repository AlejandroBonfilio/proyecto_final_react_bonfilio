import React from "react";
import { useCartContext } from "../../Context/CartContext";
import Item from "./Item";
import { Link } from "react-router-dom";
import Parse from "../../utils/Parse"

export const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <div className="container CarritoVacio" >
          <p>No agregaste productos al carrito :( </p>
          <Link to="/">Volver a inicio</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <div
          className="containerCardItems"
          
        >
          {cart.map((datos) => (
            <Item key={datos.id} productData={datos} viewCartMode={true} />
          ))}
        </div>
        <h2>
          <b>
            {" "}
            Total:{" "}
            <span>
              {Parse.price(totalPrice())}{" "}
            </span>
          </b>
        </h2>
        <div
          
        >
          <Link to="/checkout" id="completePurchaseBtn">
            Ir a finalizar compra
          </Link>
        </div>
      </div>
    </>
  );
};
