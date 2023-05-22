import { createSlice } from '@reduxjs/toolkit'
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    addtocart: [],
  },
  reducers: {
    setaddtocart: (state, action) => {
      state.addtocart = [...state.addtocart, action.payload]
    },
  },
})
export const { setaddtocart } = cartSlice.actions
export default cartSlice.reducer
