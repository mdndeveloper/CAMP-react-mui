import { Box } from '@mui/system';
import React from 'react';
import CheckIn from './CheckIn/CheckIn';
import CheckOut from './CheckOut/CheckOut';
import InterView from './Interview/Interview';
import QuickSend from './QuickSend/QuickSend';

const MessagesSounds = () => {
  return (
    <Box sx={{ mt: '30px' }}>
      <CheckIn />
      <CheckOut />
      <InterView />
      <QuickSend />
    </Box>
  );
};

export default MessagesSounds;
