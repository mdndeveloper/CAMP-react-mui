import { configureStore } from '@reduxjs/toolkit';
import { userApiSlice } from '../features/admin/userApiSlice';
import authSlice from '../features/login/authSlice';
import messageSlice from '../features/message/messageSlice';
import slidePhotoSlice from '../features/slideShow/slidePhotoSlice';
import streamSlice from '../features/stream/streamSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    stream: streamSlice,
    messages: messageSlice,
    slide: slidePhotoSlice,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
  },
  middleware: (defaults) => defaults().concat(userApiSlice.middleware),
});
