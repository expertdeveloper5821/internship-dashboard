import { createSlice } from "@reduxjs/toolkit";
import { updatepassword } from "./UpdateCredAction";

export interface updatepasswordState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: updatepasswordState = {
  loading: false,
  error: null,
  data: null,
};

const updatePasswordSlice = createSlice({
  name: "updatepassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updatepassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatepassword.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(updatepassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { reducer: updatepasswordReducer } = updatePasswordSlice;
