import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import Card from '../../Card';
import Add from './Add';
import data from './data.json';
import Item from './Item';

const PhotoImages = () => {
  return (
    <div>
      <Card title='Photo Images'>
        <Stack direction={'row'} gap={2} flexWrap={'wrap'}>
          {data.slice(0, 1).map((item) => (
            <Item key={item.id} image={item.image} />
          ))}
          <Add />
        </Stack>
      </Card>
      <Box sx={{ fontSize: '14px', mt: '8px', ml: '10px' }}>
        *Suggested image size of x * x
      </Box>
    </div>
  );
};

export default PhotoImages;
