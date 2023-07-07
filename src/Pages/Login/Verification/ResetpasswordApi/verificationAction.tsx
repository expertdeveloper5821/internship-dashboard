import { createAsyncThunk } from "@reduxjs/toolkit";
import apiServicesMethod from "../../../../Services/api/apiSevices";

export const verifyOTP = createAsyncThunk(
  "resetPassword/verifyOTP",
  async ({ otp, email }: { otp: string; email: string }, { rejectWithValue }) => {
    try {
      const data = { otp, email }
      const response = await apiServicesMethod.post("auth/reset-password", data)
      console.log("response", response.data)
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message.message);
    }
  }
);
