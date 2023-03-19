import React from 'react'
import ItemListContainer from "../ItemListContainer/ItemListContainer.js";
import products from "../../data/products.json";

function Inicio() {
  return (
    <div className="home-page">
      <ItemListContainer products={products} category="Coleccionables" />
      <ItemListContainer products={products} category="Juegos" />
      <ItemListContainer products={products} category="Periféricos" />
    </div>
  );
}
export default Inicio