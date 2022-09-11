import axiosInstance from '../../utils/axiosInstance';

export async function getPhotosApi() {
  return axiosInstance.get('/slides');
}
export async function getPhotoApi(id) {
  return axiosInstance.get(`/slides/${id}`);
}
export async function deletePhotosApi(id) {
  return axiosInstance.delete(`/slides/${id}`);
}
export async function addPhotosApi(data) {
  return axiosInstance.post(`/slides/`, data, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  });
}
