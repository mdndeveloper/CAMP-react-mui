import { createSlice } from '@reduxjs/toolkit';
import { loginAsync } from './thunks';

const initialState = {
  isLoading: false,
  error: '',
  isAuthenticated: false,
  user: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.isAuthenticated = false;
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state, action) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = {};
        state.error = action.error.message;
      });
  },
});

export const { setToken, logout } = authSlice.actions;

export default authSlice.reducer;
