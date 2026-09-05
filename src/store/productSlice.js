import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsItems: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.productsItems = action.payload;
    },
    // clearProducts: ()=> {}
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
