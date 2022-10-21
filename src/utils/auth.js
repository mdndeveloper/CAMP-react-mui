import { getProxyUser } from './proxyUser';
import { decodeToken, getToken } from './token';

export const getAuthUser = () => {
  const token = getToken();

  if (token) {
    return decodeToken(token);
  }

  return {};
};

export const getAuthUserId = (forConfig = false) => {
  try {
    const { user } = getAuthUser();

    if (!user || Object.keys(user).length === 0) return null;
    if (!user.is_admin || forConfig) return user.id;

    const proxy = getProxyUser();

    if (!proxy || Object.keys(proxy).length === 0) return user.id;

    return proxy.id;
  } catch (error) {
    return null;
  }
};
