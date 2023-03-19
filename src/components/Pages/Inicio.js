import React from 'react'

import { Link } from "react-router-dom";
import products from "../../data/products.json";
import { useState, useEffect } from "react";


function Inicio() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    setFeaturedProducts(products.slice(0, 6));
  }, []);

  return (
    <div>
      {featuredProducts.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
          <p>${product.price}</p>
          <Link to={`/item/${product.id}`}>
            <button>Ver detalle</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Inicio;