import { Box } from '@mui/material';
import React from 'react';
import AdminLayout from '../AdminLayout';
import Create from './Create';
import Library from './Library';

const DefaultMessagesContainer = () => {
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
