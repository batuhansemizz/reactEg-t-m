import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 1,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        //* burada fonksiyonlarımızı yazıyoruz.
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }, //* örnek bir fonksiyon
    },
    
})

export const { increment , decrement } = counterSlice.actions; //* yazdığımız fonksiyonları burada export ediyoruz.

export default counterSlice.reducer;