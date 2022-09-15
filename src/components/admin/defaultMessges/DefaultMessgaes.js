import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMessagesAsync } from '../../../features/message/thunks';
import AdminLayout from '../AdminLayout';
import Create from './Create';
import Library from './Library';

const DefaultMessagesContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMessagesAsync());
  }, [dispatch]);
  return (
    <AdminLayout>
      <Box
        sx={{
          boxSizing: 'border-box',
          borderRadius: '10px',
          mt: '30px',
        }}
      >
        <Create />
        <Library />
      </Box>
    </AdminLayout>
  );
};

export default DefaultMessagesContainer;
