import addToCartReducer from "./AddToCart/addToCartReducer";
import { createStore, applyMiddleware } from "redux";

// Stockchecker middleware
const checkStock = (store) => (next) => (action) => {
  const upcomingStock = [action].reduce(addToCartReducer, store.getState());

  // check if the stock is available for the action dispatched
  upcomingStock.forEach((product) => {
    if (action.payload.productId === product.id) {
      if (product.stock > -1) {
        return next(action);
      }
    }
  });
};

// Redux store
const store = createStore(addToCartReducer, applyMiddleware(checkStock));

export default store;
