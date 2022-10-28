import { Box } from '@mui/system';
import React from 'react';
import { useGetConfigsQuery } from '../../../features/userConfig/userConfigApiSlice';
import CheckIn from './CheckIn/CheckIn';
import CheckOut from './CheckOut/CheckOut';
import InterView from './Interview/Interview';
import QuickSend from './QuickSend/QuickSend';

const MessagesSounds = () => {
  const { data: configs, isSuccess } = useGetConfigsQuery();

  if (!isSuccess || configs.length <= 0) return null;

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
