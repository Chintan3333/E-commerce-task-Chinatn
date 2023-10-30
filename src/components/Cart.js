// Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/CartActions';
import { useNavigate } from 'react-router-dom';
import "../styles/Cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const Navigate= useNavigate();
  const handleGoToHome=()=>{
    Navigate('/')
  }
  const GotoCheckout=()=>{
    Navigate('/checkout')
  }

  // Implemented the necessary functionalities for the cart component

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <td className="button-container">
                <button className="button" onClick={() => handleGoToHome()}>See more products</button>
              </td>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
            <table>
                <tr>
                    <td style={{width:'400px', height:"200px"}}><p>{item.title}</p>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p></td>
              
             
              <td style={{width:'400px', height:"200px"}}> <img src={item.thumbnail} alt={item.title} style={{ width: '100px', height:"100px"}} /></td>
              </tr>
              </table>
              <button className="button" onClick={() => dispatch(removeFromCart(item.id))}>Remove from Cart</button>
            </div>
          ))}
          <p>Subtotal: ${calculateTotal(cartItems)}</p>
          <button className="button" onClick={()=>GotoCheckout()}>Checkout</button>
        </div>
      )}
    </div>
  );
};

// Helper function to calculate the total cost
const calculateTotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price, 0);
};

export default Cart;
