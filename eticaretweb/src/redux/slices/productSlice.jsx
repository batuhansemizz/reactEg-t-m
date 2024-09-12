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
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.loading = false;
                // Hata durumu için state güncellemesi yapabilirsiniz
                console.error('Ürünler yüklenirken bir hata oluştu:', action.payload);
            });
    }
})

export const {  setSelectedProduct } = productSlice.actions;

export default productSlice.reducer;