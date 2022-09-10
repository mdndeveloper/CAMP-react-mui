import axiosInstance from '../../utils/axiosInstance';

// A mock function to mimic making an async request for data
export async function getStreamApi() {
  return axiosInstance.get('/cameras');
}
