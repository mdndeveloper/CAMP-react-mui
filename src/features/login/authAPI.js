import axiosInstance from '../../utils/axiosInstance';

// A mock function to mimic making an async request for data
export async function loginApi(data = {}) {
  const dataSend = JSON.stringify({
    strategy: 'jwt',
    username: data.username,
    password: data.password,
  });

  return axiosInstance.post('/authentication', dataSend);
}
