import { Divider, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Card = ({ children, title, color = '#fc74da' }) => {
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
          width: '40%',
          borderTop: `3px solid ${color}`,
        }}
      >
        <Typography
          variant='body1'
          sx={{ textTransform: 'uppercase', color }}
          component={'h2'}
        >
          {title}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ boxSizing: 'border-box', p: '10px' }}>
        <h2>{children}</h2>
      </Box>
    </Box>
  );
};

export default Card;
