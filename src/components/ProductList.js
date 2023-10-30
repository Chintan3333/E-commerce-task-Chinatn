// ProductList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/CartActions';
import "../styles/ProductList.css";

const ProductList = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleSortByTitle = () => {
    if (sortBy === 'title') {
      setSortBy(null);
    } else {
      setSortBy('title');
    }
  };

  const handleSortByPrice = () => {
    if (sortBy === 'price') {
      setSortBy(null);
    } else {
      setSortBy('price');
    }
  };


  let filteredProducts = [];
  if (Array.isArray(products)) {
    filteredProducts = products.filter((product) => {
      if (product.title && searchTerm) {
        return product.title.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      } else if (sortBy === 'price') {
        return a.price - b.price;
      } else {
        return 0;
      }
    });
  }



  return (
    <div>
      <input
        type="text"
        placeholder="Search by product title"
        value={searchTerm}
        className="inputContainer"
        onChange={handleSearch}
      />

<div className="buttonContainer">
        <button className="button" style={{ marginRight: '10px' }} onClick={handleSortByTitle}>Sort By Title</button>
        <button className="button" onClick={handleSortByPrice}>Sort By Price</button>
      </div>
      
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Discount Percentage</th>
            <th>Rating</th>
            <th>Stock</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Thumbnail Image</th>
            <th>add to cart</th>
          </tr>
        </thead>
        
        <tbody>
          {filteredProducts.map((product) => (
           
            <tr key={product.id}>
              <td>
                <Link to={`/products/${product.id}`}>{product.title}</Link>
              </td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.discountPercentage}</td>
              <td>{product.rating}</td>
              <td>{product.stock}</td>
              <td>{product.brand}</td>
              <td>{product.category}</td>
              <td>
                <img src={product.thumbnail} alt={product.title} style={{ width: '50px' }} />
              </td>
              <td>
                <button className="button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
