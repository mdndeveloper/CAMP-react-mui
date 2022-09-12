import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addStreamApi,
  deleteStreamApi,
  getSingleStreamApi,
  getStreamApi,
  updateStreamApi,
} from './streamAPI';

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

export const addStreamAsync = createAsyncThunk(
  'stream/add',
  async ({ data, callBack }) => {
    const res = await addStreamApi(data);
    const { data: camera } = await getSingleStreamApi(res.data.id);
    console.log(data);

    return camera;
  }
);
export const updateStreamAsync = createAsyncThunk(
  'stream/update',
  async ({ data, id, callBack }) => {
    await updateStreamApi({ id, data });
    const { data: camera } = await getSingleStreamApi(id);
    callBack(true);
    return camera;
  }
);
