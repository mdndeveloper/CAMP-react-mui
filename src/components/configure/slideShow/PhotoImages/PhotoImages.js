import { Box, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import Card from '../../Card';
import RotationTimer from '../PhotoImages/RotationTimer';
import Add from './Add';
import data from './data.json';
import Item from './Item';

const PhotoImages = () => {
  return (
    <div>
      <Card title='Photo Images'>
        <Stack direction={'row'} gap={2} flexWrap={'wrap'}>
          {data.map((item) => (
            <Item key={item.id} image={item.image} />
          ))}
          <Add />
        </Stack>
      </Card>
      <Box sx={{ fontSize: '14px', mt: '8px', ml: '10px' }}>
        *Suggested image size of x * x
      </Box>
      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        gap={{ xs: 0, sm: 2 }}
        alignItems={'center'}
        justifyContent={{ xs: 'center', sm: 'end' }}
        sx={{ mb: '50px', mt: { xs: '20px', sm: '0' } }}
      >
        <div>
          <Typography variant='h6'>Display Add timer:</Typography>
        </div>
        <RotationTimer />
      </Stack>
    </div>
  );
};

export default PhotoImages;
