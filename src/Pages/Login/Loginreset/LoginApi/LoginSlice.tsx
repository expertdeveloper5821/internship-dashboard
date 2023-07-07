import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./LoginAction"

export type UserRole = 'teacher' | 'student';

interface DataState {
  loading: boolean;
  error: string | null;
  data: any;
  role: UserRole | undefined | null;
  isLoggedIn: boolean;
}

const initialState: DataState = {
  loading: false,
  error: null,
  data: null,
  role: undefined,
  isLoggedIn: false
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    logOut: (state: DataState) => {
      state.isLoggedIn = false;
      state.role = null;
      state.data = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isLoggedIn = true
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.role = action.payload.role;
        state.isLoggedIn = true;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.isLoggedIn = false;
      })
  },
});

const { reducer: dataReducer } = dataSlice;
export const { logOut } = dataSlice.actions
export default dataReducer;