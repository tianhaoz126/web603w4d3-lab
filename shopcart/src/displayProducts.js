import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const DisplayProducts = ({ products, handleIncrement, handleDecrement, showProductModal }) => {
  return (
    <div>
      {products.map(product => (
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
