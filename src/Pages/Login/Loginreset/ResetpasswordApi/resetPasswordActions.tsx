import { createAsyncThunk } from "@reduxjs/toolkit";
import apiServicesMethod from "../../../../Services/api/apiSevices";

export const fetchApiData = createAsyncThunk(

    "resetPassword/fetchData",
    async (data: any, { rejectWithValue }) => {
        try {
            const response = await apiServicesMethod.post("auth/forget-password", data);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);


