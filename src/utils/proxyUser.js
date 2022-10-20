const NAME = 'proxy_user';
export const storeProxyUser = (data) => {
  localStorage.setItem(NAME, JSON.stringify({ isProxy: true, data }));
};

export const getProxyUser = () => {
  return localStorage.getItem(JSON.parse(NAME));
};

export const deleteProxyUser = () => {
  return localStorage.removeItem(NAME);
};
