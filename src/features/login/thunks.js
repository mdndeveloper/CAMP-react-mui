import { createAsyncThunk } from '@reduxjs/toolkit';
import { decodeToken, storeToken } from '../../utils/token';
import { loginApi } from './authAPI';

export const loginAsync = createAsyncThunk('auth/login', async (data, cb) => {
  const res = await loginApi(data);

  storeToken(res.data.sign);

  const userData = decodeToken(res.data.sign).user;

  return userData;
});
