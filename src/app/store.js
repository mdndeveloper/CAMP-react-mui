import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/login/authSlice';
import streamSlice from '../features/stream/streamSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    stream: streamSlice,
  },
});
