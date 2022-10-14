import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import Item from './Item';
import QuickSendArea from './QuickSendArea';

const LeftItems = () => {
  return (
    <Box sx={{ boxSizing: 'border-box', px: '10px' }}>
      <Stack gap={4}>
        <Item
          type='checkin'
          text={'Check IN'}
          buttons={{ variant: 'contained', sx: { background: '#82da73' } }}
        />
        <Item
          type='checkout'
          text={'Check Out'}
          buttons={{ variant: 'contained', sx: { background: '#f46969' } }}
        />

        <QuickSendArea />
      </Stack>
    </Box>
  );
};

export default LeftItems;
