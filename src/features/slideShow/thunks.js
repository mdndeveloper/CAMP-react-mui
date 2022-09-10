import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAuthUserId } from '../../utils/auth';
import {
  addPhotosApi,
  deletePhotosApi,
  getPhotoApi,
  getPhotosApi,
} from './slidePhotosAPI';

export const fetchSlideShowAsync = createAsyncThunk(
  'slide-photos/fetch',
  async () => {
    const res = await getPhotosApi();

    return res.data;
  }
);

export const deletePhotosAsync = createAsyncThunk(
  'slide-photos/delete',
  async (id) => {
    const res = await deletePhotosApi(id);
    return res.data;
  }
);

export const addPhotosAsync = createAsyncThunk(
  'slide-photos/add',
  async (data) => {
    const formData = new FormData();
    formData.append('name', data.image.name);
    formData.append('file', data.image, data.image.name);
    formData.append('file_name', new Date().getTime() + '_' + data.image.name);
    formData.append('file_title', new Date().getTime() + '_' + data.image.name);
    formData.append('status', 0);
    formData.append('sliderTime', data.sliderTime);
    formData.append('userId', getAuthUserId());

    const res = await addPhotosApi(formData);
    const { data: photo } = await getPhotoApi(res.data.id);
    return photo;
  }
);
