//carrito de compras

import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function Cart(props) {
  return (
    <div>
      <FaShoppingCart />
      <span className="cart-count ml-2">{props.cartCount}</span>
    </div>
  );
}

export default Cart;