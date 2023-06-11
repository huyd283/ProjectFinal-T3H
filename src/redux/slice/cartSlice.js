import { createSlice } from "@reduxjs/toolkit";
import * as React from "react";
const initialState = {
  cart: [],
  load: false,
  buy: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state = initialState, action) => {

      const itemIndex = state.cart.findIndex((p) => p.id === action.payload.id);

      if (itemIndex === -1) {
        // Sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm và trường "quantity"
        const newItem = {
          ...action.payload,
          quantity: 1, // Giá trị mặc định của quantity là 1
        };
        return { cart: [...state.cart, newItem] };
      } else {
        // Sản phẩm đã tồn tại trong giỏ hàng, chỉ cập nhật trường "quantity"
        const updatedCart = [...state.cart];
        updatedCart[itemIndex] = {
          ...updatedCart[itemIndex],
          quantity: updatedCart[itemIndex].quantity + 1, // Tăng quantity lên 1
        };
        return { cart: updatedCart };
      }
      
    },
    decreaseQuantity: (state, action) => {
      const item = state.cart.find((p) => p.id === action.payload);

      if (item.quantity === 1) {
        // Nếu số lượng là 1, xóa sản phẩm khỏi giỏ hàng
        state.cart.splice(state.indexOf(item), 1);
      } else {
        // Giảm số lượng đi 1
        item.quantity--;
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.cart.find((p) => p.id === action.payload);

      // Tăng số lượng đi 1
      item.quantity++;
    },
    deleteCart: (state = initialState, action) => {
      const newListCart = state.cart;
      const objIndex = newListCart.findIndex(
        (obj) => obj.id === action.payload.id
      );

      newListCart.splice(objIndex, 1);

      //   return { cart: [...newListCart] };
    },
    buyItem: (state = initialState, action) => {
      const itemFind = state.buy.find((p) => p.id === action.payload.id);

      if (!itemFind) {
        return { buy: [...state.cart, action.payload] };
      } else return state;
    },
  },
});

export const { addToCart, deleteCart, buyItem,decreaseQuantity, increaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;