import { createAsyncThunk } from "@reduxjs/toolkit";
import apiServicesMethod from "../../../../Services/api/apiSevices";
import { isSetEmail } from "./resetPasswordSlice";

export const fetchApiData = createAsyncThunk(

    "resetPassword/fetchData",
    async (data: any, { rejectWithValue , dispatch }) => {
        try {
             dispatch(isSetEmail(data))
            const response = await apiServicesMethod.post("auth/forget-password", data);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.message.message);
        }
    }
);


