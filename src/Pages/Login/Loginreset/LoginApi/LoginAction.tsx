import { createAsyncThunk } from "@reduxjs/toolkit";
import apiServicesMethod from "../../../../Services/api/apiSevices";

export const fetchData = createAsyncThunk(
  "data/fetch",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await apiServicesMethod.post("/data", data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);