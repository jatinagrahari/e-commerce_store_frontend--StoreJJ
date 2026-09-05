import { createSlice } from "@reduxjs/toolkit";

const storedCartItems = localStorage.getItem("cartItems");

const initialState = {
  cartItems: storedCartItems ? JSON.parse(storedCartItems) : [],
  totalCartPrice: 0,
  totalCartDiscountedPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;

      const existingItem = state.cartItems.find(
        (item) => item.product._id == product._id,
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cartItems.push({
          product,
          quantity,
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    updateQuantity: (state, action) => {
      const { product, quantity } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.product._id == product._id,
      );

      if (existingItem.quantity > 1) {
        existingItem.quantity -= quantity;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    deleteFromCart: (state, action) => {
      const { product } = action.payload;

      state.cartItems = state.cartItems.filter(
        (item) => item.product._id !== product._id,
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart: (state, action) => {
      state.cartItems = [];
      state.totalCartDiscountedPrice = 0;
      state.totalCartPrice = 0;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, deleteFromCart, clearCart, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
