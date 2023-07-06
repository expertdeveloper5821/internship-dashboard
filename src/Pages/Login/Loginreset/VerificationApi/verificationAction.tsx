// import { createAsyncThunk } from "@reduxjs/toolkit";
// import apiServicesMethod from "../../../../Services/api/apiSevices";

// export const verifyOTP = createAsyncThunk(
//     "verification/verifyOTP",
//     async (otp: string,  { rejectWithValue }) => {
//         try {
//             const response = await apiServicesMethod.post("auth/reset-password", { otp });
//             console.log("response ==>", response)
//             return response.data;
//         } catch (error: any) {
//             return rejectWithValue(error.message);
//         }

//     }
// );

import { createAsyncThunk } from "@reduxjs/toolkit";
import apiServicesMethod from "../../../../Services/api/apiSevices";

interface VerifyOTPParams {
    otp: string;
    email: string;
}

export const verifyOTP = createAsyncThunk(
    "resetPassword/verifyOTP",
    async (params: VerifyOTPParams, { rejectWithValue }) => {
        const { otp, email } = params;
        try {
            const response = await apiServicesMethod.post("auth/reset-password", { otp, email });
            // console.log(response, "response")
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);


