//colocoar prop greeting y mostrar mensaje dentro del contenedor
import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
      <h1 style={{ color: '#333' }}>{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;