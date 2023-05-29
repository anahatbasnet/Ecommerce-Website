import { createSlice } from "@reduxjs/toolkit";
const addressslice = createSlice({
    name:'address',
    initialState:{
    Information:''

    },
    reducers:{
        setInformation:(state,action)=>{
            state.Information=action.payload;
        console.log(state.Information)
        },
      
    }
})
export const {setInformation}=addressslice.actions
export default addressslice.reducer