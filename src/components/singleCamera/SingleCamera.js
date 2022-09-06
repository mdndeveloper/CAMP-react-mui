import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useInnerSize from '../../hooks/useInnerSize';
import RightSide from './RightSide';

const SingleCameraContainer = () => {
  const { height } = useInnerSize();
  return (
    <div>
      <Grid container>
        <Grid xs={10}>
          <Box sx={{ height, overflow: 'hidden' }}>
            <Box sx={{ width: '100%', height: '100%' }}>
              <Box
                as='img'
                src={image}
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid xs={2}>
          <RightSide />
        </Grid>
      </Grid>
    </div>
  );
};

export default SingleCameraContainer;

const image =
  'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600';
