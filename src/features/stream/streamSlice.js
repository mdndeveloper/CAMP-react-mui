import { createSlice } from '@reduxjs/toolkit';
import { fetchStreamAsync } from './thunks';

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
      });
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;
