import axiosInstance from '../../utils/axiosInstance';

export async function getMessagesApi() {
  return axiosInstance.get('/messages');
}
export async function getMessageApi(id) {
  return axiosInstance.get(`/messages/${id}`);
}
export async function deleteMessagesApi(id) {
  return axiosInstance.delete(`/messages/${id}`);
}
export async function addMessageApi(data) {
  return axiosInstance.post(`/messages/`, data);
}
