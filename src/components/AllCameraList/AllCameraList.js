import { Grid } from '@mui/material';
import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const AllCameraListContainer = () => {
  return (
    <div>
      <Grid container>
        <Grid xs={2}>
          <LeftSide />
        </Grid>
        <Grid xs={10}>
          <RightSide />
        </Grid>
      </Grid>
    </div>
  );
};

export default AllCameraListContainer;
