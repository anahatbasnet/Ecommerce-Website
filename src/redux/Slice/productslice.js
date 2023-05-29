import { createSlice } from "@reduxjs/toolkit";
import { CgLaptop } from "react-icons/cg";

const productslice = createSlice({
  name: "Products",
  initialState: {
    cartItems:[],
    products: null,
    counter: 1,
  },
  reducers: {
    setCartItems:(state,action) => {
      state.cartItems=[...state.cartItems,action.payload]
      console.log(state.cartItems)

    },
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

export const { setProducts, setIncrementCounter, setDecrementCounter, setCounter,setCartItems } = productslice.actions;
export default productslice.reducer;
