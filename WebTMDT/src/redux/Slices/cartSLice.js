import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosClient } from "../../api/axiosClient";


export const fetchCart = createAsyncThunk("cart/fetchProduct", async () => {
    const response = await axiosClient.get("/api/cart");
    return response.data;
})

export const addCart = createAsyncThunk("cart/addCart", async ({idProduct , quantity }) => {
    const reponse = await axiosClient.post("/api/cart", { idProduct , quantity });
    console.log("a",reponse.data);
    return reponse.data;
    
    
})




const initialState = { cart: [], loading: false, error: null };

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // setFilter: (state, action) => {
        //     state.filter = action.payload;
        // },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload;
            })
            .addCase(fetchCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addCart.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addCart.fulfilled, (state, action) => {
                state.loading = false;
                state.cart.unshift(action.payload);
            })
            .addCase(addCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
         
    }
});
// export const { setFilter } = cartSlice.actions
export default cartSlice.reducer;
