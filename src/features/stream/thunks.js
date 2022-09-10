import { createAsyncThunk } from '@reduxjs/toolkit';
import { getStreamApi } from './streamAPI';

export const fetchStreamAsync = createAsyncThunk('stream/fetch', async () => {
  const res = await getStreamApi();
  console.log(res);
  return res.data;
});
