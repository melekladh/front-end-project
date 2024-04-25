import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios"

export const createProduct=createAsyncThunk('/product/createproduct',async(data,{rejectWithValue})=>{
    try {
        const res=await axios.post('https://back-end-project-rlx0.onrender.com/api/product/addproduct',data,{
            headers:{
                token:localStorage.getItem("token")
            }
        })
        return  res.data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)
    }
})

export const getProduct=createAsyncThunk('/product/getproduct',async(data,{rejectWithValue})=>{
    try {
        const res=await axios.get('https://back-end-project-rlx0.onrender.com/api/product/getproduct',{
            headers:{
                token:localStorage.getItem('token')
            }
        })
        return  res.data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)
    }
})
const productSlice= createSlice({
    name:"product",
    initialState:{
        productData:[],
        error:null,
        loading:false
    },
    extraReducers:(builder)=>{
        builder.addCase(getProduct.pending,(state)=>{
            state.loading=true

        })
        .addCase(getProduct.fulfilled,(state,action)=>{
            state.loading=false
            state.error=null
           state.productData=action.payload.products



        }) .addCase(getProduct.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload
           
            
    })
}
})

export default productSlice.reducer