import { io } from 'socket.io-client';
import { getAuthUserId } from './auth';

const socket = io('https://ws.pupdates.pro', {
  extraHeaders: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    userId: getAuthUserId(),
  },
});

export default socket;
