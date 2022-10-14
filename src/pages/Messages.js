import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import Library from '../components/messages/Library';
import Send from '../components/messages/Send';

const Messages = () => {
  return (
    <div>
      <Box sx={{}}>
        <Typography
          variant='h6'
          sx={{ textTransform: 'uppercase', mb: '15px' }}
          component={'h2'}
        >
          Messages
        </Typography>

        <Divider />
        <Send />
        <Library />
      </Box>
    </div>
  );
};

export default Messages;
