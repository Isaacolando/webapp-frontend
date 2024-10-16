
import React from 'react';
import ProductList from './productlist.js';
import Cart from './Cart.js';
import './App.css'; // Assuming you have a CSS file for styling

const App = () => {
  const products = [
    // You can add products here or fetch from an API
  ];

  return (
    <div className="App">
      <div className="main-content">
        <ProductList products={products} />
        <Cart />
      </div>
    </div>
  );
};

export default App;
