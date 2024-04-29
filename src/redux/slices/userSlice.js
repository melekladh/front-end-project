import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; // Importing createSlice and createAsyncThunk from Redux Toolkit
import axios from 'axios'; // Importing axios for making HTTP requests

// Async thunk action for user login
export const UserLogin = createAsyncThunk('/login', async (data, { rejectWithValue }) => {
    try {
        const res = await axios.post('https://back-end-project-rlx0.onrender.com/api/login', data);
        return res.data; // Returning response data
    } catch (error) {
        return rejectWithValue(error.response.data.msg); // Returning error message if request fails
    }
});

// Async thunk action for user registration
export const UserRegister = createAsyncThunk('/register', async (data, { rejectWithValue }) => {
    try {
        const res = await axios.post('https://back-end-project-rlx0.onrender.com/api/register', data);
        return res.data; // Returning response data
    } catch (error) {
        return rejectWithValue(error.response.data.msg); // Returning error message if request fails
    }
});

// Creating a user slice
const userSlice = createSlice({
    name: "users", // Slice name
    initialState: {
        userData: {}, // Object to hold user data
        token: localStorage.getItem('token') || null, // User token retrieved from local storage or null if not found
        loading: false, // Loading indicator
        error: null, // Error message
        isAuth: localStorage.getItem('isAuth') || false // Authentication status retrieved from local storage or false if not found
    },
    reducers: {
        logout: (state) => {
            state.token = null; // Clearing user token
            state.isAuth = false; // Setting authentication status to false
            localStorage.removeItem("isAuth"); // Removing authentication status from local storage
            localStorage.removeItem("token"); // Removing user token from local storage
        }
    },
    extraReducers: (builder) => {
        builder
            // Handling login pending state
            .addCase(UserLogin.pending, (state) => {
                state.loading = true; // Setting loading indicator to true
            })
            // Handling successful login
            .addCase(UserLogin.fulfilled, (state, action) => {
                state.loading = false; // Setting loading indicator to false
                state.error = null; // Clearing error
                state.token = action.payload.token; // Setting user token
                state.isAuth = true; // Setting authentication status to true
                localStorage.setItem("token", action.payload.token); // Storing user token in local storage
                localStorage.setItem("isAuth", true); // Storing authentication status in local storage
            })
            // Handling login rejection
            .addCase(UserLogin.rejected, (state, action) => {
                state.loading = false; // Setting loading indicator to false
                state.error = action.payload; // Setting error message
                state.token = null; // Clearing user token
                state.isAuth = false; // Setting authentication status to false
            })
            // Handling registration pending state
            .addCase(UserRegister.pending, (state) => {
                state.loading = true; // Setting loading indicator to true
            })
            // Handling successful registration
            .addCase(UserRegister.fulfilled, (state, action) => {
                state.loading = false; // Setting loading indicator to false
                state.error = null; // Clearing error
                state.token = action.payload.token; // Setting user token
                state.isAuth = true; // Setting authentication status to true
                localStorage.setItem("token", action.payload.token); // Storing user token in local storage
                localStorage.setItem("isAuth", true); // Storing authentication status in local storage
            })
            // Handling registration rejection
            .addCase(UserRegister.rejected, (state, action) => {
                state.loading = false; // Setting loading indicator to false
                state.error = action.payload; // Setting error message
                state.token = null; // Clearing user token
                state.isAuth = false; // Setting authentication status to false
            });
    }
});

export default userSlice.reducer; // Exporting user reducer
export const { logout } = userSlice.actions; // Exporting logout action
