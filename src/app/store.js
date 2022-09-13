import { configureStore } from '@reduxjs/toolkit';
import { userApiSlice } from '../features/admin/userApiSlice';
import authSlice from '../features/login/authSlice';
import messageSlice from '../features/message/messageSlice';
import slidePhotoSlice from '../features/slideShow/slidePhotoSlice';
import streamSlice from '../features/stream/streamSlice';
import { configApiSlice } from '../features/userConfig/userConfigApiSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    stream: streamSlice,
    messages: messageSlice,
    slide: slidePhotoSlice,
    [configApiSlice.reducerPath]: configApiSlice.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
  },
  middleware: (defaults) =>
    defaults().concat(configApiSlice.middleware, userApiSlice.middleware),
});
