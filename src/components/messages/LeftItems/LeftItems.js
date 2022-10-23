import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { useGetConfigQuery } from '../../../features/userConfig/userConfigApiSlice';
import { getAuthUserId } from '../../../utils/auth';
import Item from './Item';
import QuickSendArea from './QuickSendArea';

const LeftItems = () => {
  const { data, isSuccess } = useGetConfigQuery(getAuthUserId());

  if (!isSuccess || data.length <= 0) return null;
  return (
    <Box sx={{ boxSizing: 'border-box', px: '10px' }}>
      <Stack gap={4}>
        <Item
          type='checkin'
          text={'Check IN'}
          buttons={{ variant: 'contained', sx: { background: '#82da73' } }}
          appendText={data[0].checkInMessage}
        />
        <Item
          type='checkout'
          text={'Check Out'}
          buttons={{ variant: 'contained', sx: { background: '#f46969' } }}
          appendText={data[0].checkOutMessage}
        />

        <QuickSendArea />
      </Stack>
    </Box>
  );
};

export default LeftItems;
