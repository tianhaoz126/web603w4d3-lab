import React from 'react';
import DisplayProducts from './displayProducts';

const Home = ({ products, handleIncrement, handleDecrement, showProductModal }) => {
  return (
    <div>
      <DisplayProducts 
        products={products} 
        handleIncrement={handleIncrement} 
        handleDecrement={handleDecrement}
        showProductModal={showProductModal}
      />
    </div>
  );
};

export default Home;
