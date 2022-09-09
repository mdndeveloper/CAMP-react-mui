import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginApi } from './authAPI';

export const loginAsync = createAsyncThunk('auth/login', async (data, cb) => {
  const res = await loginApi(data);

  localStorage.setItem('token', res.data.sign);

  const userData = { id: res.data.user.id };

  return userData;
});
