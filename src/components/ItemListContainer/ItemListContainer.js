import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import products from '../Pages/products.json';

function ItemListContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = products.find(product => product.id === itemId);
    setProduct(selectedProduct);
  }, [itemId]);

 

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
}

export default ItemListContainer;
