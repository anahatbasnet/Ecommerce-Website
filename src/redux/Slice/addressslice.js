import { createSlice } from "@reduxjs/toolkit";
const addressslice = createSlice({
    name:'address',
    initialState:{
        location:''

    },
    reducers:{
        setLocation:(state,action)=>{
            state.location=action.payload;
        console.log(state.location)
        },
      
    }
})
export const {setLocation}=addressslice.actions
export default addressslice.reducer