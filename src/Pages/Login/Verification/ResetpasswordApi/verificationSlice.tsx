import { createSlice } from "@reduxjs/toolkit";
import { verifyOTP } from "./verificationAction";

interface ResetPasswordState {
  loading: boolean;
  error: string | null;
  data: any;
  otp: string | null;
  email: string | null;
}

const initialState: ResetPasswordState = {
  loading: false,
  error: null,
  data: null,
  otp: null,
  email: null,
};

const resetPasswordSlice = createSlice({
  name: "resetPassword",
  initialState,
  reducers: {
    setOTP: (state, action) => {
      state.otp = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyOTP.pending.toString(), (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOTP.fulfilled.toString(), (state, action: any) => {
        state.loading = false;
        state.data = action.payload;

        // Check OTP and email in payload
        if (state.otp !== action.payload.otp || state.email !== action.payload.email) {
          state.error = "Invalid OTP or email";
        }
      })
      .addCase(verifyOTP.rejected.toString(), (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setOTP, setEmail } = resetPasswordSlice.actions;
export default resetPasswordSlice.reducer;
