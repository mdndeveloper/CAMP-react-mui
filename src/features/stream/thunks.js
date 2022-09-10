import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteStreamApi, getStreamApi } from './streamAPI';

export const fetchStreamAsync = createAsyncThunk('stream/fetch', async () => {
  const res = await getStreamApi();

  return res.data;
});
export const deleteStreamAsync = createAsyncThunk(
  'stream/delete',
  async (id) => {
    const res = await deleteStreamApi(id);
    return res.data;
  }
);
