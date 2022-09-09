import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/login/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
