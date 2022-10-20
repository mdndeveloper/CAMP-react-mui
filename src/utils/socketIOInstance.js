import { io } from 'socket.io-client';

const socket = io('https://ws.pupdates.pro', {
  extraHeaders: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    userId: localStorage.getItem('accountSelected'),
  },
});

export default socket;
