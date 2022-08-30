import addToCartReducer from "./AddToCart/addToCartReducer";
import { createStore } from "redux";

const store = createStore(addToCartReducer);

export default store;
