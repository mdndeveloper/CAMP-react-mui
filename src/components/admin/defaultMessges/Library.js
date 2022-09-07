import { Box, Divider, Paper, Typography } from '@mui/material';
import React from 'react';

const Library = () => {
  return (
    <Box
      as={Paper}
      sx={{
        boxSizing: 'border-box',
        px: '10px',
        borderRadius: '10px',
        mt: '30px',
      }}
    >
      <Box
        sx={{
          py: '15px',
          pl: '10px',
          width: {
            xs: '95%',
            sm: '40%',
          },
          borderTop: '3px solid #3dc3c2',
        }}
      >
        <Typography
          variant='body1'
          sx={{ textTransform: 'uppercase' }}
          component={'h2'}
        >
          Library
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ height: '300px', boxSizing: 'border-box', p: '10px' }}>
        <h2>Data</h2>
      </Box>
    </Box>
  );
};

export default Library;
