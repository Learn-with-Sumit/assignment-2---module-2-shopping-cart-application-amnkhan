import { ADD_TO_CART, INCREMENT, DECREMENT } from "./actionTypes";

// Add to cart Action
export const addToCart = (productId) => {
  return {
    type: ADD_TO_CART,
    payload: {
      productId,
    },
  };
};

// Quantity increase action
export const increase = (productId) => {
  return {
    type: INCREMENT,
    payload: {
      productId,
    },
  };
};

// Quantity decrease action
export const decrease = (productId) => {
  return {
    type: DECREMENT,
    payload: {
      productId,
    },
  };
};
