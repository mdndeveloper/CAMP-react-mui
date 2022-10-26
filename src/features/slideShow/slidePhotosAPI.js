import { getAuthUserId } from '../../utils/auth';
import axiosInstance from '../../utils/axiosInstance';

export async function getPhotosApi() {
  return axiosInstance.get('/slides', {
    headers: {
      userid: getAuthUserId(),
    },
  });
}
export async function getPhotoApi(id) {
  return axiosInstance.get(`/slides/${id}`, {
    headers: {
      userid: getAuthUserId(),
    },
  });
}
export async function deletePhotosApi(id) {
  return axiosInstance.delete(`/slides/${id}`, {
    headers: {
      userid: getAuthUserId(),
    },
  });
}
export async function addPhotosApi(data) {
  return axiosInstance.post(`/slides/`, data, {
    headers: {
      'content-type': 'multipart/form-data',
      userid: getAuthUserId(),
    },
  });
}
