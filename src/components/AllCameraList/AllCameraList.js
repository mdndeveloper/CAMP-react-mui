import { Box, Grid } from '@mui/material';
import React from 'react';
import bgPattern from '../../assets/images/bg_pattern.png';
import useInnerSize from '../../hooks/useInnerSize';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const AllCameraListContainer = () => {
  const leftShow = false;
  const { height } = useInnerSize();
  return (
    <Box as='div' sx={{ background: `url(${bgPattern})`, height }}>
      <Grid container>
        <Grid xs={2} sx={{ display: leftShow ? 'block' : 'none' }}>
          <LeftSide />
        </Grid>
        <Grid xs={leftShow ? 10 : 12}>
          <RightSide />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AllCameraListContainer;
