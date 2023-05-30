import { configureStore } from "@reduxjs/toolkit";
import cartsReducer from "./slice/cartSlice"; 
import productsReducer from "./slice/getProductSlice"
import thunkMiddleware from 'redux-thunk';
const store = configureStore({
  reducer: {
    carts: cartsReducer,
    products: productsReducer,
  },
});
export default store;