const NAME = 'proxy_user';
export const storeProxyUser = (data) => {
  localStorage.setItem(NAME, JSON.stringify(data));
};

export const getProxyUser = () => {
  try {
    return JSON.parse(localStorage.getItem(NAME));
  } catch (error) {
    return {};
  }
};

export const deleteProxyUser = () => {
  return localStorage.removeItem(NAME);
};
