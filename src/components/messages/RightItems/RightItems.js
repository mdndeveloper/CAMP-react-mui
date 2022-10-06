import { LoadingButton } from '@mui/lab';
import { Box, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import CampArea from './CampArea';

const RightItems = () => {
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  return (
    <div>
      <Stack gap={4}>
        <Stack direction='row' gap={2} alignItems={'start'} flexWrap='wrap'>
          <Box sx={{ flex: 1, minWidth: { xs: '130px' } }}>
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label='Pet Name'
              variant='outlined'
              placeholder='Input here'
              sx={{ width: '100%' }}
              fullWidth
            />
          </Box>
          <Box sx={{ flex: 1, minWidth: { xs: '130px' } }}>
            <CampArea />
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
              sx={{ width: '100px', background: '#9b55d6' }}
              variant='contained'
            >
              Interview
            </LoadingButton>
          </div>
        </Stack>
        <Stack direction='row' gap={2} alignItems={'start'} flexWrap='wrap'>
          <Box sx={{ flex: 1, minWidth: { xs: '130px' } }}>
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label='Pet Name'
              variant='outlined'
              placeholder='Input here'
              multiline
              rows={5}
              maxRows={10}
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
              sx={{ background: '#fc74da' }}
            >
              Send
            </LoadingButton>
          </div>
        </Stack>
      </Stack>
    </div>
  );
};

export default RightItems;
