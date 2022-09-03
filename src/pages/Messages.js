import { Box, Divider, Paper, Typography } from '@mui/material';
import React from 'react';
import MessageForm from '../components/messages/MessageForm';

const Messages = () => {
  return (
    <div>
      <Box sx={{}}>
        <Typography
          variant='h5'
          sx={{ textTransform: 'uppercase', mb: '15px' }}
          component={'h2'}
        >
          Messages
        </Typography>

        <Divider />
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
      </Box>
    </div>
  );
};

export default Messages;
