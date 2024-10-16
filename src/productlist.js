/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import './App.css';
import { addProductToCart } from './redux/actions/cartActions';


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:8000/api/products/')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addProductToCart(product));
  };

  return (
    <div className="product-grid">
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price} KSh</p>
          {product.discount && <p>Discount: {product.discount}%</p>}
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ProductList
*/
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import './App.css';
import { addProductToCart } from './redux/actions/cartActions';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch products from API
    axios.get('http://localhost:8000/api/products/')
      .then(response => {
        // Combine fetched products with manually added products
        setProducts([...response.data, ...defaultProducts]);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });

    // Default products you want to manually add
    const defaultProducts = [
      {
        id: 1,
        name: "HP Windows Laptop",
        price: 50000,
        discount: 5,
        image: "src/hp-laptop.avif"
      },
      {
        id: 2,
        name: "Samsung s24 ultra",
        price: 110000,
        discount: 10,
        image: "src/samsung s24.avif"
      },
      /*
      {
        id: 3,
        name: "MacBook Pro",
        price: 200000,
        discount: 15,
        image: "src/macbook-pro.avif"
      },*/
      // Add more products as needed
    ];
    
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addProductToCart(product));
  };

  return (
    <div className="product-grid">
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price} KSh</p>
            {product.discount && <p>Discount: {product.discount}%</p>}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

