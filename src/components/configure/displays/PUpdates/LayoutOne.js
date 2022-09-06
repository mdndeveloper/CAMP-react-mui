import { Box } from '@mui/system';
import React from 'react';

const LayoutOne = () => {
  return (
    <Box
      sx={{
        height: `180px`,
        width: `250px`,
        background: '#f1f1f1',
        borderRadius: '4px',
      }}
    >
      <Box
        sx={{
          height: `100%`,
          width: `70%`,
          background: '#81b1d9',
          borderRadius: '4px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
        }}
      >
        1
      </Box>
    </Box>
  );
};

export default LayoutOne;
