import React, { useState } from 'react';
import { Row, Col, Button, ButtonGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const DisplayProducts = ({ products, handleIncrement, handleDecrement, showProductModal }) => {
  const [sortOption, setSortOption] = useState('normal');

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case 'lowest':
        return a.price - b.price;
      case 'highest':
        return b.price - a.price;
      default:
        return a.id - b.id;
    }
  });

  return (
    <div>
      <h2>Products</h2>
      <div className="sort-options">
        <label>Sort Price By: </label>
        <select value={sortOption} onChange={handleSortChange}>
          <option value="normal">Normal</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
      {sortedProducts.map(product => (
        <Row key={product.id} className="mb-4 align-items-center product-row">
          <Col sm="2" className="text-center">
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ width: "100px", height: "100px", cursor: "pointer" }}
              onClick={() => showProductModal(product)}
            />
          </Col>
          <Col sm="4">
            <h5>{product.name}</h5>
            <p>${product.price}</p>
          </Col>
          <Col sm="3" className="text-center">
            <div className="product-actions">
              <Button color="secondary" onClick={() => handleIncrement(product.id)}>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
              <Button color="secondary" onClick={() => handleDecrement(product.id)}>
                <FontAwesomeIcon icon={faMinus} />
              </Button>
              <span className="quantity-display">{product.quantity}</span>
            </div>
          </Col>
          <Col sm="3" className="text-center">
            <p>Quantity: {product.quantity}</p>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default DisplayProducts;
