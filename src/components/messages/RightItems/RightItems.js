import { Box, Button, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import CampArea from './CampArea';

const RightItems = () => {
  return (
    <div>
      <Stack gap={4}>
        <Stack direction='row' gap={2} alignItems={'start'}>
          <div>
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label='Pet Name'
              variant='outlined'
              placeholder='Input here'
              sx={{ width: '150px' }}
            />
          </div>
          <Box sx={{ flex: 1 }}>
            <CampArea />
          </Box>
          <div>
            <Button sx={{ width: '100px' }} variant='contained'>
              Check IN
            </Button>
          </div>
        </Stack>
        <Stack direction='row' gap={2} alignItems={'start'}>
          <Box sx={{ flex: 1 }}>
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label='Pet Name'
              variant='outlined'
              placeholder='Input here'
              multiline
              rows={10}
              maxRows={10}
              fullWidth
            />
          </Box>
          <div>
            <Button variant='contained'>Check Out</Button>
          </div>
        </Stack>
      </Stack>
    </div>
  );
};

export default RightItems;
