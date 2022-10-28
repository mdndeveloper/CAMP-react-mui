import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { useGetConfigsQuery } from '../../../features/userConfig/userConfigApiSlice';
import Item from './Item';
import QuickSendArea from './QuickSendArea';

const LeftItems = () => {
  const { data } = useGetConfigsQuery();

  return (
    <Box sx={{ boxSizing: 'border-box', px: '10px' }}>
      <Stack gap={4}>
        <Item
          type='checkin'
          text={'Check IN'}
          buttons={{ variant: 'contained', sx: { background: '#82da73' } }}
          appendText={data[0].checkInMessage}
          duration={data[0].checkInDuration}
        />
        <Item
          type='checkout'
          text={'Check Out'}
          buttons={{ variant: 'contained', sx: { background: '#f46969' } }}
          appendText={data[0].checkOutMessage}
          duration={data[0].checkOutDuration}
        />

        <QuickSendArea />
      </Stack>
    </Box>
  );
};

export default LeftItems;
