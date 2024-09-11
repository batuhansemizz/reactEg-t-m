import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../redux/slices/appSlice";
import productSlice from "../redux/slices/productSlice";

export const store = configureStore({
    reducer: {
       app: appSlice,
       product: productSlice,
    },
});
