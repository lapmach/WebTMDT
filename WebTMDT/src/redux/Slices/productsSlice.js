import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { axiosClient } from "../../api/axiosClient";


export const fetchProduct = createAsyncThunk("products/fetchProduct", async () => {
    const response = await axiosClient.get("/api/products");
    return response.data;
})

export const addProduct = createAsyncThunk("products/addProduct", async ({ name , price }) => {
    const reponse = await axiosClient.post("/api/products", { name , price });
    return reponse.data;
})

export const deleteProduct = createAsyncThunk("products/deleteProduct", async (id) => {
        await axiosClient.delete(`/api/products/${id}`);
        return id; 
})

export const updateProduct = createAsyncThunk("products/updateProduct", async ({ id, name , price }) => {


    const updateProduct= { name : name , price : price };
    const response = await axiosClient.patch(`/api/products/${id}`, updateProduct)

    return response.data;
})

export const fetchProductById = createAsyncThunk('products/fetchProductById', async (id) => {
    const response = await axiosClient.get(`/api/products/${id}`);
    return response.data;
})



const initialState = { products: [], loading: false, error: null, filter: "", currentProduct: null };

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addProduct.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action.payload);

                state.products.push(action.payload);
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deleteProduct.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products = state.products.filter(item => item.id !== action.payload);
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ;
            })
            .addCase(updateProduct.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.loading = false;
                let index = state.products.findIndex(item => item.id === action.payload.id)
                if (index !== -1) {
                    state.products[index] = action.payload;
                }

            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchProductById.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.loading = false;
                state.currentProduct = action.payload
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});
export const { setFilter } = productsSlice.actions
export default productsSlice.reducer;
