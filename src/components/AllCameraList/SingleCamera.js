import { Box } from '@mui/material';
import React from 'react';

const SingleCamera = ({ height, image }) => {
  return (
    <Box sx={{ height }}>
      <Box sx={{ width: '100%', height: '100%' }}>
        <Box
          as='img'
          src={image}
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>
    </Box>
  );
};

export default SingleCamera;
