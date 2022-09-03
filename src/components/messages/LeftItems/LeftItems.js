import { Box, Button, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import QuickSend from './QuickSend';

const LeftItems = () => {
  return (
    <Box sx={{ boxSizing: 'border-box', px: '10px' }}>
      <Stack gap={4}>
        <Stack direction='row' gap={2} alignItems={'center'}>
          <Box sx={{ flex: 1 }}>
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label='Pet Name'
              variant='outlined'
              placeholder='Input here'
              fullWidth
            />
          </Box>
          <div>
            <Button variant='contained' sx={{ background: '#82da73' }}>
              Check IN
            </Button>
          </div>
        </Stack>
        <Stack direction='row' gap={2} alignItems={'center'}>
          <Box sx={{ flex: 1 }}>
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label='Pet Name'
              variant='outlined'
              placeholder='Input here'
              fullWidth
            />
          </Box>
          <div>
            <Button variant='contained' sx={{ background: '#f46969' }}>
              Check Out
            </Button>
          </div>
        </Stack>

        <Stack direction='row' gap={2} alignItems={'center'}>
          <Box sx={{ flex: 1 }}>
            <QuickSend />
          </Box>
          <div>
            <Button variant='contained' sx={{ background: '#6087d4' }}>
              Send
            </Button>
          </div>
        </Stack>
      </Stack>
    </Box>
  );
};

export default LeftItems;
