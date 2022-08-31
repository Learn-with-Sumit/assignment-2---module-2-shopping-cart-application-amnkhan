import { ADD_TO_CART, INCREMENT, DECREMENT } from "./actionTypes";

// Initial State
const initialState = [
  {
    id: 1,
    productName: "Asus Vivobook X515MA",
    stock: 20,
    price: 35500,
    quantity: 0,
  },
  {
    id: 2,
    productName: "Dell E1916HV 18.5 Inch",
    stock: 35,
    price: 9300,
    quantity: 0,
  },
  {
    id: 3,
    productName: "Canon Eos 4000D 18MP",
    stock: 72,
    price: 36500,
    quantity: 0,
  },
];

const addToCartReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add to cart
    case ADD_TO_CART:
      return state.map((product) => {
        if (product.id === action.payload.productId) {
          return {
            ...product,
            stock: product.stock - 1,
            quantity: product.quantity + 1,
          };
        } else {
          return {
            ...product,
          };
        }
      });
    // Quantiy increase
    case INCREMENT:
      return state.map((product) => {
        if (product.id === action.payload.productId) {
          return {
            ...product,
            quantity: product.quantity + 1,
            stock: product.stock - 1,
          };
        } else {
          return {
            ...product,
          };
        }
      });
    // Quantity decrease
    case DECREMENT:
      return state.map((product) => {
        if (product.id === action.payload.productId) {
          return {
            ...product,
            quantity: product.quantity - 1,
            stock: product.stock + 1,
          };
        } else {
          return {
            ...product,
          };
        }
      });
    // Default
    default:
      return state;
  }
};

export default addToCartReducer;
