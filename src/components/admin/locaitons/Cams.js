import { Box, Divider, Paper, Typography } from '@mui/material';
import React from 'react';

const Cams = () => {
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
          borderTop: '3px solid #5f7686',
        }}
      >
        <Typography
          variant='body1'
          sx={{ textTransform: 'uppercase' }}
          component={'h2'}
        >
          Cams
        </Typography>
      </Box>

      <Divider />
      <Box sx={{ height: '300px', boxSizing: 'border-box', p: '10px' }}>
        <h2>Data</h2>
      </Box>
    </Box>
  );
};

export default Cams;
