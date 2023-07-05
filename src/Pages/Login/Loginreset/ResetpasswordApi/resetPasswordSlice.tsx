// In resetPasswordSlice.ts

import { createSlice } from "@reduxjs/toolkit";
import { fetchApiData } from "./resetPasswordActions";

interface ResetPasswordState {
    loading: boolean;
    error: string | null;
    data: any;
}

const initialState: ResetPasswordState = {
    loading: false,
    error: null,
    data: null,
};

const resetPasswordSlice = createSlice({
    name: "resetPassword",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchApiData.pending.toString(), (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchApiData.fulfilled.toString(), (state, action: any) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchApiData.rejected.toString(), (state, action: any) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default resetPasswordSlice.reducer;
