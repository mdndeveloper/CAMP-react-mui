import { Box } from '@mui/system';
import React from 'react';

import Create from './Create';
import Library from './Library';

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
        <Create />
        <Library />
      </Box>
    </Box>
  );
};

export default LocationContainer;
