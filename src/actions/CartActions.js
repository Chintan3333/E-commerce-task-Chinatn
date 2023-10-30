// actions.js
export const addToCart = (product) => (dispatch, getState) => {
    const { cart } = getState();
    const existingItem = cart.cartItems.find((item) => item.id === product.id);
  
    if (existingItem) {
      // If the item already exists, increase its quantity
      dispatch({
        type: 'ADD_TO_CART',
        payload: { ...product, quantity: existingItem.quantity + 1 },
      });
    } else {
      // If the item does not exist, add it as a new item
      dispatch({
        type: 'ADD_TO_CART',
        payload: { ...product, quantity: 1 },
      });
    }
  
    // Persist the cart state in localStorage
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };
  
  export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  
    // Persist the cart state in localStorage
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };
  