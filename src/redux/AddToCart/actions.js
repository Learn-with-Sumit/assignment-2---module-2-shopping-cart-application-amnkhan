import { ADD_TO_CART, INCREMENT, DECREMENT } from "./actionTypes";

export const addToCart = (productId) => {
  return {
    type: ADD_TO_CART,
    payload: {
      productId,
    },
  };
};

export const increase = (productId) => {
  return {
    type: INCREMENT,
    payload: {
      productId,
    },
  };
};

export const decrease = (productId) => {
  return {
    type: DECREMENT,
    payload: {
      productId,
    },
  };
};
