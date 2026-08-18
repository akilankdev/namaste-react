import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";
//We just imported the combined reducer function into store.

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;