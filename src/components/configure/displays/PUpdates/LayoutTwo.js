import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const LayoutTwo = () => {
  return (
    <Stack
      direction='row'
      gap={1}
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
      <Box
        sx={{
          height: `100%`,
          width: `30%`,
          background: 'transparent',
          borderRadius: '4px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'end',
          color: '#fff',
        }}
      >
        <Box
          sx={{
            height: `30%`,
            width: `100%`,
            background: '#81b1d9',
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
          }}
        >
          2
        </Box>
      </Box>
    </Stack>
  );
};

export default LayoutTwo;
