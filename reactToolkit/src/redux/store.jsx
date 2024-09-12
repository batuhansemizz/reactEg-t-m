import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";

//* burada bir çok kendi reducerlarımızı birleştirebiliriz.

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        //* birleştirdiğimiz reducerları burada ekliyoruz.
    },
    
})