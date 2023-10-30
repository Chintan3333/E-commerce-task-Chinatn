// ProductsPage.js
import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import { useNavigate } from 'react-router-dom';
import "../styles/ProductPage.css";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const Navigate= useNavigate();
  const handleGoToCart=()=>{
    Navigate('/cart')
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
        console.log(data.products)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="products-page-container">
        <div className="products-page-navbar" >
      <h1>Product List</h1></div>
      <td>
                <button className="cart-button" onClick={() => handleGoToCart()}>See your Cart</button>
              </td>
      <ProductList products={products} />
    </div>
  );
};

export default ProductsPage;
