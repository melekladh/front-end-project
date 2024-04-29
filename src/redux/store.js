import { configureStore } from '@reduxjs/toolkit'; // Importing configureStore from Redux Toolkit
import userSlice from './slices/userSlice'; // Importing userSlice reducer
import productSlice from './slices/productSlice'; // Importing productSlice reducer

// Configuring the Redux store
export default configureStore({
  reducer: {
    user: userSlice, // Adding userSlice reducer under the 'user' key in the reducer object
    products: productSlice // Adding productSlice reducer under the 'products' key in the reducer object
  }
});
