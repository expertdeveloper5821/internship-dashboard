// import { createSlice } from "@reduxjs/toolkit";
// import { verifyOTP } from "./verificationAction";

// interface VerificationState {
//   loading: boolean;
//   error: string | null;
//   success: boolean;
// }

// const initialState: VerificationState = {
//   loading: false,
//   error: null,
//   success: false,
// };

// const verificationSlice = createSlice({
//   name: "verification",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(verifyOTP.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//         state.success = false;
//       })
//       .addCase(verifyOTP.fulfilled, (state) => {
//         state.loading = false;
//         state.success = true;
//       })
//       .addCase(verifyOTP.rejected, (state, action: any) => {
//         state.loading = false;
//         state.error = action.payload;
//         state.success = false;
//       });
//   },
// });

// export default verificationSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { verifyOTP } from "../../Loginreset/VerificationApi/verificationAction";

interface ResetPasswordState {
  loading: boolean;
  error: string | null | undefined;
  data: any;
}

const initialState: ResetPasswordState = {
  loading: false,
  error: undefined,
  data: null,
};

const resetPasswordSlice = createSlice({
  name: "resetPassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(verifyOTP.pending.toString(), (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(verifyOTP.fulfilled.toString(), (state, action: any) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(verifyOTP.rejected.toString(), (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default resetPasswordSlice.reducer;

