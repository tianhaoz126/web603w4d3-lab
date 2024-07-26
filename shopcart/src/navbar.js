import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import './Navbar.css';

const Navbar = ({ totalItems }) => {
  return (
    <header className="App-header">
      <Container>
        <Row>
          <Col>
            <Link to="/" className="logo">
              Shop 2 React
            </Link>
          </Col>
          <Col className="text-right">
            <Link to="/cart" className="cart-link">
              <i className="fas fa-shopping-cart"></i> {totalItems} items
            </Link>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Navbar;

