import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import products from '../../data/products.json';

function ItemListContainer() {
  const { id: categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(products.filter(product => product.category === categoryId));
  }, [categoryId]);

  return (
    <div>
      {filteredProducts.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <img src={product.image} alt={product.name} />
        </div>
      ))}
    </div>
  );
}

export default ItemListContainer;

