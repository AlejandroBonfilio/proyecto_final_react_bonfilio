import React from 'react';

import Item from "../Item/Item.js";

function ItemListContainer(props) {
  const products = props.products.filter((p) => p.category === props.category);

  return (
    <div className="product-list">
      <h2>{props.category}</h2>
      <div className="product-grid">
        {products.map((p) => (
          <Item
            key={p.id}
            id={p.id}
            title={p.title}
            price={p.price}
            image={p.image}
          />
        ))}
      </div>
    </div>
  );
}


export default ItemListContainer;