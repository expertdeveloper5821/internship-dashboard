import { createSlice } from "@reduxjs/toolkit";
import { fetchApiData } from "./resetPasswordActions";

interface ResetPasswordState {
  loading: boolean;
  error: string | null;
  data: any;
  email: string | null;
  isSetEmail: boolean;
}

const initialState: ResetPasswordState = {
  loading: false,
  error: null,
  data: null,
  email: null,
  isSetEmail: false,
};

const resetPasswordSlice = createSlice({
  name: "resetPassword",
  initialState,
  reducers: {
    isSetEmail: (state: ResetPasswordState, action: any) => {
      state.email = action.payload.email;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiData.pending.toString(), (state) => {
        state.loading = true;
        state.error = null;
        state.isSetEmail = true;
      })
      .addCase(fetchApiData.fulfilled.toString(), (state, action: any) => {
        state.loading = false;
        state.data = action.payload;
        state.isSetEmail = true;
      })
      .addCase(fetchApiData.rejected.toString(), (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
        state.isSetEmail = false;
      });
  },
});

export const { isSetEmail } = resetPasswordSlice.actions;
export default resetPasswordSlice.reducer;
