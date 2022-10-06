import { LoadingButton } from '@mui/lab';
import { Box, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import QuickSend from './QuickSend';

const LeftItems = () => {
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isLoading3, setIsLoading3] = useState(false);

  return (
    <Box sx={{ boxSizing: 'border-box', px: '10px' }}>
      <Stack gap={4}>
        <Stack direction='row' gap={2} alignItems={'center'} flexWrap='wrap'>
          <Box sx={{ flex: 1, minWidth: { xs: '130px' } }}>
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
            <LoadingButton
              loading={isLoading1}
              onClick={() => {
                setIsLoading1(true);
                setTimeout(() => {
                  setIsLoading1(false);
                }, 1000 * 2);
              }}
              variant='contained'
              sx={{ background: '#82da73' }}
            >
              Check IN
            </LoadingButton>
          </div>
        </Stack>
        <Stack direction='row' gap={2} alignItems={'center'} flexWrap='wrap'>
          <Box sx={{ flex: 1, minWidth: { xs: '130px' } }}>
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
            <LoadingButton
              loading={isLoading2}
              onClick={() => {
                setIsLoading2(true);
                setTimeout(() => {
                  setIsLoading2(false);
                }, 1000 * 2);
              }}
              variant='contained'
              sx={{ background: '#f46969' }}
            >
              Check Out
            </LoadingButton>
          </div>
        </Stack>

        <Stack direction='row' gap={2} alignItems={'center'} flexWrap='wrap'>
          <Box sx={{ flex: 1, minWidth: { xs: '130px' } }}>
            <QuickSend />
          </Box>
          <div>
            <LoadingButton
              loading={isLoading3}
              onClick={() => {
                setIsLoading3(true);
                setTimeout(() => {
                  setIsLoading3(false);
                }, 1000 * 2);
              }}
              variant='contained'
              sx={{ background: '#6087d4' }}
            >
              Send
            </LoadingButton>
          </div>
        </Stack>
      </Stack>
    </Box>
  );
};

export default LeftItems;
