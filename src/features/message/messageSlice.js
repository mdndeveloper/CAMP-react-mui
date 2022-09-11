import { createSlice } from '@reduxjs/toolkit';
import {
  addMessageAsync,
  deleteMessageAsync,
  fetchMessagesAsync,
  updateMessageAsync,
} from './thunks';

const initialState = {
  isLoading: false,
  error: '',
  data: [],
  editMode: false,
  editing: {},
};

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    activeEditMode: (state, action) => {
      state.editMode = true;
      state.editing = action.payload;
    },
    inactiveEditMode: (state, action) => {
      state.editMode = false;
      state.editing = {};
    },
  },
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
      })
      .addCase(updateMessageAsync.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(updateMessageAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data.map((i) =>
          i.id === action.payload.id ? action.payload : i
        );
        state.editMode = false;
        state.editing = {};
      })
      .addCase(updateMessageAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { activeEditMode, inactiveEditMode } = messageSlice.actions;

export default messageSlice.reducer;
