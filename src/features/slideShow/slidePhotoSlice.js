import { createSlice } from '@reduxjs/toolkit';
import {
  addPhotosAsync,
  deletePhotosAsync,
  fetchSlideShowAsync,
} from './thunks';

const initialState = {
  isLoading: false,
  error: '',
  photos: [],
  ad: [],
};

export const slidePhotoSlice = createSlice({
  name: 'slide-photo',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSlideShowAsync.pending, (state, action) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(fetchSlideShowAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.photos = action.payload;
      })
      .addCase(fetchSlideShowAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.photos = [];
        state.error = action.error.message;
      })
      .addCase(deletePhotosAsync.pending, (state, action) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(deletePhotosAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.photos = state.photos.filter((i) => i.id !== action.meta.arg);
      })
      .addCase(deletePhotosAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addPhotosAsync.pending, (state, action) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(addPhotosAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.photos.push(action.payload);
      })
      .addCase(addPhotosAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setToken } = slidePhotoSlice.actions;

export default slidePhotoSlice.reducer;
