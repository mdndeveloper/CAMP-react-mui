import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';
import { setProxyUser, setToken } from './features/login/authSlice';
import './index.css';
import theme from './utils/customTheme';
import { getProxyUser } from './utils/proxyUser';
import { decodeToken, getToken } from './utils/token';

const container = document.getElementById('root');
const root = createRoot(container);

const token = getToken();

if (token) {
  store.dispatch(setToken(decodeToken(token).user));
}
const proxyUser = getProxyUser();
if (proxyUser && Object.keys(proxyUser).length > 0) {
  store.dispatch(setProxyUser(proxyUser));
}

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
