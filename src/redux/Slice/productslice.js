import { createSlice } from "@reduxjs/toolkit";

const productslice = createSlice({
  name: "Products",
  initialState: {
    products: null,
    counter: 1,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setIncrementCounter: (state) => {
      state.counter += 1;
    },
    setDecrementCounter: (state) => {
      if (state.counter > 1) {
        state.counter -= 1;
      }
    },
    setCounter: (state, action) => {
      state.counter = action.payload;
    },
  },
});

export const { setProducts, setIncrementCounter, setDecrementCounter, setCounter } = productslice.actions;
export default productslice.reducer;
