import axios from 'axios';
import configData from '../config.json';
import { getAuthUserId } from './auth';
import { getToken } from './token';

const token = getToken();
const baseURL = configData.SERVER_URL;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    userid: getAuthUserId(),
    Authorization: token ? `Bearer ${token}` : '',
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
