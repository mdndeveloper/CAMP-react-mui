import axiosInstance from '../../utils/axiosInstance';

export async function getStreamApi() {
  return axiosInstance.get('/cameras');
}
export async function getSingleStreamApi(id) {
  return axiosInstance.get(`/cameras/${id}`);
}

export async function deleteStreamApi(id) {
  return axiosInstance.delete(`/cameras/${id}`);
}
export async function addStreamApi(data) {
  return axiosInstance.post(`/cameras/`, data);
}
export async function updateStreamApi({ id, data }) {
  return axiosInstance.put(`/cameras/${id}`, data);
}
