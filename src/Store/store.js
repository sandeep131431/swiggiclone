import { configureStore } from "@reduxjs/toolkit";
import cartReduces from "./CardSlicer";

export const store = configureStore({
    reducer:{
        cartslice:cartReduces,
    }
})