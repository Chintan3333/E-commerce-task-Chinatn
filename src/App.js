// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import Cart from './components/Cart';
import Checkout from './pages/CheckOut';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<ProductsPage/>} />
        <Route path="/products/:productID" element={<ProductDetailsPage/>} />
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
