import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../api/axiosClient";


export const fetchUsers= createAsyncThunk("users/fetchUsers", async () => {
    const response = await axiosClient.get("/api/users");
    return response.data;
})





const initialState = { users: [], loading: false, error: null , currentUser: ""};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCurrUser: (state, action) => {
            state.currentUser = action.payload;
        },

    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })


    }
});
export const { setCurrUser } = userSlice.actions
export default userSlice.reducer;
