import { createAsyncThunk } from "@reduxjs/toolkit";
import apiServicesMethod from "../../../../Services/api/apiSevices";

export const updatepassword = createAsyncThunk(
  "data/updatepassword",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await apiServicesMethod.post(
        "/auth/reset-password",
        data
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message.message);
    }
  }
);
