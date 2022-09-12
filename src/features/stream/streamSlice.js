import { createSlice } from '@reduxjs/toolkit';
import {
  addStreamAsync,
  deleteStreamAsync,
  fetchStreamAsync,
  updateStreamAsync,
} from './thunks';

const initialState = {
  isLoading: false,
  error: '',
  data: [],
};

export const authSlice = createSlice({
  name: 'stream',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchStreamAsync.pending, (state, action) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchStreamAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchStreamAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.data = [];
        state.error = action.error.message;
      })
      .addCase(deleteStreamAsync.pending, (state, action) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(deleteStreamAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data.filter((i) => i.id !== action.meta.arg);
      })
      .addCase(deleteStreamAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addStreamAsync.pending, (state, action) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(addStreamAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.push(action.payload);
      })
      .addCase(addStreamAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateStreamAsync.pending, (state, action) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(updateStreamAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action);
        state.data = state.data.map((i) => {
          if (i.id === action.meta.arg.id) {
            return action.payload;
          }
          return i;
        });
      })
      .addCase(updateStreamAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;
