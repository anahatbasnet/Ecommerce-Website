import { createSlice } from '@reduxjs/toolkit'
const buynowslice = createSlice({
  name: 'buynow',
  initialState: {
    buy: '',
  },
  reducers: {
    setbuy: (state, action) => {
      state.buy = action.payload
      console.log("hululuolul",state.buy)
    },
  },
})
export const { setbuy } = buynowslice.actions
export default buynowslice.reducer
