import { getProxyUser } from './proxyUser';
import { decodeToken, getToken } from './token';

export const getAuthUser = () => {
  const token = getToken();

  if (token) {
    return decodeToken(token);
  }

  return {};
};

export const getAuthUserId = () => {
  try {
    const { user } = getAuthUser();

    if (!user || Object.keys(user).length === 0) return null;
    if (!user.is_admin) return user.id;
    const proxy = getProxyUser();

    if (!proxy || Object.keys(proxy).length === 0) return null;
    return proxy.data.id;
  } catch (error) {
    return null;
  }
};
