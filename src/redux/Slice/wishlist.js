import { createSlice } from '@reduxjs/toolkit'
const wishlist = createSlice({
  name: 'wishlist',
  initialState: {
    wish: [],

    
  },
  reducers: {
    setWish: (state, action) => {
      state.wish = [...state.wish,action.payload]
      console.log(state.wish)
    },
    setremoveWish:(state,action)=>{
       
        state.wish=state.wish.filter(item=>{
            return item.id!==action.payload.id
        })
console.log(state.wish)

    }
  },
})
export const { setWish,setremoveWish } = wishlist.actions
export default wishlist.reducer
