import jwtDecode from 'jwt-decode';

const TOKEN_NAME = 'token';
export const storeToken = (token) => {
  localStorage.setItem(TOKEN_NAME, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_NAME);
};

export const removeToken = () => {
  return localStorage.removeItem(TOKEN_NAME);
};

export const decodeToken = (token) => {
  try {
    return jwtDecode(token);
  } catch (error) {
    throw new Error('Invalid token');
  }
};
