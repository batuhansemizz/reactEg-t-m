import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// useEffect ve useState kaldırıldı çünkü kullanılmıyor

const initialState = {
    products: [],
    selectedProduct: {},
    loading: false,
}

const baseUrl = 'https://fakestoreapi.com/products';

export const getAllProducts = createAsyncThunk('product/getAllProducts', async () => {
    const response = await axios.get(baseUrl);
    return response.data;
})

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) =>{
            state.loading = true;
        })
       builder.addCase(getAllProducts.fulfilled, (state, action) => {
        
        state.loading = false;
        state.products = action.payload;
       })
       
        
    }
})

export const { setProducts, setSelectedProduct } = productSlice.actions;

export default productSlice.reducer;