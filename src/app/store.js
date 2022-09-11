import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/login/authSlice';
import messageSlice from '../features/message/messageSlice';
import streamSlice from '../features/stream/streamSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    stream: streamSlice,
    messages: messageSlice,
  },
});
