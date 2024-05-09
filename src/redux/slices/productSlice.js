import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; // Importing createSlice and createAsyncThunk from Redux Toolkit
import axios from "axios"; // Importing axios for making HTTP requests

// Async thunk action for creating a product
export const createProduct = createAsyncThunk('/product/createproduct', async (data, { rejectWithValue }) => {
    try {
        const res = await axios.post('http://localhost:9000/api/product/addproduct', data, {
            headers: {
                token: localStorage.getItem("token") // Setting token header
            }
        });
        return res.data; // Returning response data
    } catch (error) {
                console.log(error)

        return rejectWithValue(error.response.data.msg); // Returning error message if request fails
    }
});

// Async thunk action for fetching products
export const getProduct = createAsyncThunk('/product/getproduct', async (data, { rejectWithValue }) => {
    try {
        const res = await axios.get('http://localhost:9000/api/product/getproduct', {
            headers: {
                token: localStorage.getItem('token') // Setting token header
            }
        });
        return res.data; // Returning response data
    } catch (error) {
        return rejectWithValue(error.response.data.msg); // Returning error message if request fails
    }
});

// Creating a product slice
const productSlice = createSlice({
    name: "product", // Slice name
    initialState: {
        productData: [], // Array to hold product data
        error: null, // Error message
        loading: false // Loading indicator
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProduct.pending, (state) => {
                state.loading = true; // Setting loading indicator to true when fetching products
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.loading = false; // Setting loading indicator to false on successful product fetch
                state.error = null; // Clearing error
                state.productData = action.payload.products; // Updating product data with fetched products
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.loading = false; // Setting loading indicator to false on failed product fetch
                state.error = action.payload; // Setting error message
            });
    }
});

export default productSlice.reducer; // Exporting product reducer
