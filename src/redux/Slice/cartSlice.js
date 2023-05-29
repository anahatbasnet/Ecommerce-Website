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
    removefromcart:(state,action)=>{
      const itemId = action.payload;
      state.addtocart = state.addtocart.filter(item=>item.id !== itemId)
    },
    removeAll:(state)=>{
      state.addtocart=[]
    }
  },
})
export const { setaddtocart, removefromcart , removeAll } = cartSlice.actions
export default cartSlice.reducer
