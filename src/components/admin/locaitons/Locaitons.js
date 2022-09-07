import { Box } from '@mui/system';
import React from 'react';

import Cams from './Cams';
import Form from './Form';

const LocationContainer = () => {
  return (
    <Box sx={{ mt: '30px' }}>
      <Box
        sx={{
          boxSizing: 'border-box',
          borderRadius: '10px',
          mt: '30px',
        }}
      >
        <Form />
        <Cams />
      </Box>
    </Box>
  );
};

export default LocationContainer;
