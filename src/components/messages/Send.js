import { Box, Divider, Paper, Typography } from '@mui/material';
import React from 'react';
import MessageForm from './MessageForm';
const Send = () => {
  return (
    <div>
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
            borderTop: '3px solid #6087d4',
          }}
        >
          <Typography
            variant='body1'
            sx={{ textTransform: 'uppercase' }}
            component={'h2'}
          >
            Send a PUPDATE
          </Typography>
        </Box>
        <Divider />
        <div>
          <MessageForm />
        </div>
      </Box>
    </div>
  );
};

export default Send;
