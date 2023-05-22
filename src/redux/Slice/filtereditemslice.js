import { createSlice } from '@reduxjs/toolkit'
const filtereditemslice = createSlice({
  name: 'filtereditem',
  initialState: {
    filter: [],
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload
      console.log(state.filter)
    },
  },
})
export const { setFilter } = filtereditemslice.actions
export default filtereditemslice.reducer
