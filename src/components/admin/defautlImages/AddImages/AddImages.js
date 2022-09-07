import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import Card from '../../Card';
import data from './data.json';
import Item from './Item';

const AdImages = () => {
  return (
    <div>
      <div>
        <Card title='AD Images'>
          <Stack direction={'row'} gap={2} flexWrap={'wrap'}>
            {data.slice(0, 1).map((item) => (
              <Item key={item.id} image={item.image} />
            ))}
          </Stack>
        </Card>
      </div>
      <Box sx={{ fontSize: '14px', mt: '8px', ml: '10px' }}>
        *Suggested image size of x * x
      </Box>
    </div>
  );
};

export default AdImages;
