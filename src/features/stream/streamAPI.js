import axiosInstance from '../../utils/axiosInstance';

export async function getStreamApi() {
  return axiosInstance.get('/cameras');
}
export async function deleteStreamApi(id) {
  return axiosInstance.delete(`/cameras/${id}`);
}
