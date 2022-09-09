import axios from 'axios';
import configData from '../config.json';

const token = localStorage.getItem('token');
const baseURL = configData.SERVER_URL;

const selectedAccount = localStorage.getItem('accountSelected');

const axiosInstance = axios.create({
  baseURL,
  headers: {
    userid: selectedAccount ? selectedAccount : null,
    Authorization: token ? `Bearer ${token}` : '',
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
