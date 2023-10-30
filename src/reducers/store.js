// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './CartReducer';

const persistedCartItems = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState = {
  cart: {
    cartItems: persistedCartItems,
  },
};

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
