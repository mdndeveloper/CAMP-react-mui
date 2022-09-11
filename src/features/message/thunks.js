import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addMessageApi,
  deleteMessagesApi,
  getMessageApi,
  getMessagesApi,
} from './messageAPI';

export const fetchMessagesAsync = createAsyncThunk(
  'message/fetch',
  async () => {
    const res = await getMessagesApi();

    return res.data;
  }
);
export const deleteMessageAsync = createAsyncThunk(
  'message/delete',
  async (id) => {
    const res = await deleteMessagesApi(id);
    return res.data;
  }
);
export const addMessageAsync = createAsyncThunk('message/add', async (data) => {
  const res = await addMessageApi(data);
  const { data: message } = await getMessageApi(res.data.id);
  return message;
});
