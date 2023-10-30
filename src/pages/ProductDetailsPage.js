// ProductDetailsPage.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/CartActions';
import '../styles/ProductDetailsPage.css';

const ProductDetailsPage = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const Navigate= useNavigate();
  const handleGoToCart=()=>{
    Navigate('/cart')
  }
  const handleGoToHome=()=>{
    Navigate('/')
  }

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${productID}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    fetchProductDetails();
  }, [productID]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details-container">
         <div className="button-container">
        <td>
                <button className="button" onClick={() => handleGoToHome()}>See more products</button>
              </td>
         <td>
                <button className="button" onClick={() => handleGoToCart()}>See your Cart</button>
              </td></div>
      <h2>{product.title}</h2>
      <h4>Brand: {product.brand}</h4>
      <h4>Description: {product.description}</h4>
      <h4>Price: ${product.price}</h4>
      <h4>Discount Percentage: {product.discount_percentage}%</h4>
      <h4>Category: {product.category}</h4>
      <h4>Remaining Stock: {product.stock}</h4>
      <div>
        {product.thumbnail && <img src={product.thumbnail} alt={product.title} style={{ width: '200px' }} />}
        {product.images && product.images.map((image)=>{return (
            <img src={image} alt={product.title} style={{ width: '200px' }} />
        )})}
      </div>
      <div>
      <button className="button" onClick={() => handleAddToCart(product)}>Add to Cart</button>
    </div>
    </div>
  );
};

export default ProductDetailsPage;
