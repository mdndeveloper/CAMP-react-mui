import { Stack } from '@mui/system';
import React from 'react';
import Card from '../../Card';
import LayoutOne from './LayoutOne';
import LayoutThree from './LayoutThree';
import LayoutTwo from './LayoutTwo';
const PUpdateLayout = () => {
  return (
    <div>
      <Card title={'PUpdates Layout'} color='#81b1d9'>
        <Stack direction='row' gap={4} sx={{ py: '12px' }} flexWrap='wrap'>
          <LayoutOne />
          <LayoutTwo />
          <LayoutThree />
        </Stack>
      </Card>
    </div>
  );
};

export default PUpdateLayout;
