import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';
import { setToken } from './features/login/authSlice';
import './index.css';
import { decodeToken, getToken } from './utils/token';

const container = document.getElementById('root');
const root = createRoot(container);

const token = getToken();

if (token) {
  store.dispatch(setToken(decodeToken(token).user));
}

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
