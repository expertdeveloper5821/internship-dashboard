import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import dataReducer from '../Pages/Login/Loginreset/LoginApi/LoginSlice';
import { updatepasswordReducer } from '../Pages/Login/UserCredential/UpdateCredentialApi/UpdateCredSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    data: dataReducer,
    resetPassword: updatepasswordReducer
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

export type UserRole = 'teacher' | 'student'
export const selectUserRole = (state: RootState) => state.data.role;
export const selectUserLogged = (state: RootState) => state.data.isLoggedIn;