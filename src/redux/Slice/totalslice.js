import { createSlice } from '@reduxjs/toolkit'


const totalslice = createSlice({
  name: 'total',
  initialState: {
    price: [],
    totalCost: 0,
  },
  reducers: {
    setPrice: (state, action) => {
      state.price = [...state.price, action.payload]
      let val = 0
      state.price.forEach(element => {
        val += element
      })
      state.totalCost = val
      console.log(state.totalCost)
    },
  },
})

export const { setPrice } = totalslice.actions
export default totalslice.reducer
