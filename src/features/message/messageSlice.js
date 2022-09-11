import { createSlice } from '@reduxjs/toolkit';
import {
  addMessageAsync,
  deleteMessageAsync,
  fetchMessagesAsync,
} from './thunks';

const initialState = {
  isLoading: false,
  error: '',
  data: [],
};

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessagesAsync.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchMessagesAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchMessagesAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.data = [];
        state.error = action.error.message;
      })
      .addCase(deleteMessageAsync.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(deleteMessageAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data.filter((i) => i.id !== action.meta.arg);
      })
      .addCase(deleteMessageAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addMessageAsync.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(addMessageAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.push(action.payload);
      })
      .addCase(addMessageAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setToken } = messageSlice.actions;

export default messageSlice.reducer;
