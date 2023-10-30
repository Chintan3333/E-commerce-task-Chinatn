// Checkout.js
import React from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { useHistory, useNavigate } from 'react-router-dom';
import { removeFromCart } from '../actions/CartActions';
import "../styles/checkout.css";

const Checkout = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handlePayment = () => {
    // Perform payment processing logic here

    // Clear the cart
    cartItems.forEach((item) => dispatch(removeFromCart(item.id)));

    // Redirect to products page
    Navigate('/');
  };

  const calculateTotal = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <h3 className="bill">Bill</h3>
    
        <table>
        {cartItems.map((item) => (
          <tr key={item.id}>
            <td>{item.title}</td> <td>Quantity: {item.quantity}</td> <td> Price: ${item.price * item.quantity}</td>
            
          </tr>
        ))}</table>
      
      <h3 className="total">Total: ${calculateTotal(cartItems)}</h3>
      <button className="payment-button" onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Checkout;
