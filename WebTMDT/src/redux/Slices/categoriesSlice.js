import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../api/axiosClient";


export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
    const response = await axiosClient.get("/api/categories");
    return response.data;
})





const initialState = { categories: [], loading: false, error: null };

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })


    }
});

export default categoriesSlice.reducer;
