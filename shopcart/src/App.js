// src/App.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './navbar';
import Home from './Home';
import Cart from './Cart';
import ProductModal from './ProductModal';
import CheckOut from './CheckOut';
import products from './products';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
      totalItems: 0,
      modalOpen: false,
      selectedProduct: null,
      isAuthenticated: false, // Track authentication state
    };
  }

  handleIncrement = (productId) => {
    const newProducts = this.state.products.map(product => {
      if (product.id === productId) {
        product.quantity++;
      }
      return product;
    });
    this.calculateTotal(newProducts);
  };

  handleDecrement = (productId) => {
    const newProducts = this.state.products.map(product => {
      if (product.id === productId && product.quantity > 0) {
        product.quantity--;
      }
      return product;
    });
    this.calculateTotal(newProducts);
  };

  calculateTotal = (products) => {
    const totalItems = products.reduce((total, product) => total + product.quantity, 0);
    this.setState({ products, totalItems });
  };

  showProductModal = (product) => {
    this.setState({ selectedProduct: product, modalOpen: true });
  };

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };

  handleLogin = () => {
    this.setState({ isAuthenticated: true });
  };

  render() {
    return (
      <Router>
        <Container className="App">
          <Navbar totalItems={this.state.totalItems} />
          <Routes>
            <Route path="/" element={
              <Home 
                products={this.state.products} 
                handleIncrement={this.handleIncrement}
                handleDecrement={this.handleDecrement}
                showProductModal={this.showProductModal}
              />
            } />
            <Route path="/cart" element={<Cart products={this.state.products} />} />
            <Route path="/checkout" element={<CheckOut isAuthenticated={this.state.isAuthenticated} handleLogin={this.handleLogin} />} />
          </Routes>
          <ProductModal 
            product={this.state.selectedProduct}
            isOpen={this.state.modalOpen}
            toggle={this.toggleModal}
          />
        </Container>
      </Router>
    );
  }
}

export default App;
