import { decodeToken, getToken } from './token';

export const getAuthUser = () => {
  const token = getToken();

  if (token) {
    return decodeToken(token);
  }

  return {};
};

export const getAuthUserId = () => {
  const user = getAuthUser();

  if (Object.keys(user).length > 0) {
    return user?.user?.id || null;
  }
  return null;
};
