import { Stack } from '@mui/system';
import React from 'react';
import Item from './GeneralMessage';
import InterView from './InterView';

const RightItems = () => {
  return (
    <div>
      <Stack gap={4}>
        <InterView />
        <Item />
      </Stack>
    </div>
  );
};

export default RightItems;
