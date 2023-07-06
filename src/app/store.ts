import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import apiReducer from '.././Pages/Login/Loginreset/ResetpasswordApi/resetPasswordSlice'; // Import the apiSlice
import counterReducer from '../features/counter/counterSlice';
import dataReducer from '../Pages/Login/Loginreset/LoginApi/LoginSlice';
import resetPasswordSlice from '.././Pages/Login/Loginreset/ResetpasswordApi/resetPasswordSlice';
import verificationSlice from '../Pages/Login/Loginreset/VerificationApi/verificationSlice'; // Import the verificationSlice

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    api: apiReducer, // Add the apiSlice reducer to the store
    data: dataReducer,
    resetPassword: resetPasswordSlice,
    verification: verificationSlice, 
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
