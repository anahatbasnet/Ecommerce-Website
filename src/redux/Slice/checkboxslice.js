import { createSlice } from '@reduxjs/toolkit'
const checkboxslice = createSlice({
  name: 'checkbox',
  initialState: {
    check: false,
    isChecked: [],
  },
  reducers: {
    setcheck: state => {
      state.check = !state.check
      // console.log(state.check)
    },
    setIschecked: (state, action) => {
        console.log(state.isChecked)
        state.isChecked =[action.payload];
      },
      
  },
})
export const { setcheck, setIschecked } = checkboxslice.actions
export default checkboxslice.reducer
