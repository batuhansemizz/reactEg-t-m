import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: [],
    loading: false,
}

export const getAllUsers = createAsyncThunk('users/getAllUsers', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response.data)
    return response.data;
    
})  

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // HTTP isteği yoksa kullanılır
    },
    extraReducers: (builder) => {
        // HTTP isteği varsa kullanılır
      
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            
        })
       
    }
})

// export const {  } = userSlice.actions; // Şu an için boş, gerektiğinde eklenebilir

export default userSlice.reducer;