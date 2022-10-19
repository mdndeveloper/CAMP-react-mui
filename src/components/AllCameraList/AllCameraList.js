import { Grid } from '@mui/material';
import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const AllCameraListContainer = () => {
  const leftShow = false;
  return (
    <div>
      <Grid container>
        <Grid xs={2} sx={{ display: leftShow ? 'block' : 'none' }}>
          <LeftSide />
        </Grid>
        <Grid xs={leftShow ? 10 : 12}>
          <RightSide />
        </Grid>
      </Grid>
    </div>
  );
};

export default AllCameraListContainer;
