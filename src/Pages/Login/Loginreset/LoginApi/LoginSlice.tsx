import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./LoginAction"

interface DataState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: DataState = {
  loading: false,
  error: null,
  data: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

const { reducer: dataReducer } = dataSlice;
export default dataReducer;