import { configureStore } from "@reduxjs/toolkit";
import productsliceReducer from "../Slice/productslice";
import buynowsliceReducer from "../Slice/buynowslice";
import cartSliceReducer from "../Slice/cartSlice";
import checkboxsliceReducer from "../Slice/checkboxslice";
import totalsliceReducer from "../Slice/totalslice";
import wishlistReducer from "../Slice/wishlist";
import addresssliceReducer from "../Slice/addressslice";
import filtereditemsliceReducer from "../Slice/filtereditemslice";
const store = configureStore({
    reducer:{
        Products: productsliceReducer,
        buynow:buynowsliceReducer,
        cart:cartSliceReducer,
        checkbox:checkboxsliceReducer,
        total: totalsliceReducer,
        wishlist:wishlistReducer,
        address:addresssliceReducer,
        filtereditem:filtereditemsliceReducer
    }
});
export default store