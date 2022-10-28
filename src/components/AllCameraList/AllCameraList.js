import { Box, Grid } from '@mui/material';
import React from 'react';
import bgPattern from '../../assets/images/bg_pattern.png';
import { useGetConfigsQuery } from '../../features/userConfig/userConfigApiSlice';
import useInnerSize from '../../hooks/useInnerSize';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const AllCameraListContainer = () => {
  const { height } = useInnerSize();

  const { isSuccess } = useGetConfigsQuery();

  if (!isSuccess) return null;

  return (
    <Box
      as='div'
      sx={{ background: `url(${bgPattern})`, height, overflow: 'auto' }}
    >
      <NoSlideShow />
      <TopBottom />
    </Box>
  );
};

const NoSlideShow = () => {
  const { data: config, isSuccess } = useGetConfigsQuery();

  if (!isSuccess) return null;

  if (config[0].slideShowPosition !== 'NONE') return null;
  return (
    <Grid container>
      <Grid xs={12}>
        <RightSide slideShowPosition={config[0].slideShowPosition} />
      </Grid>
    </Grid>
  );
};

const TopBottom = (isTop = false) => {
  const { data: config, isSuccess } = useGetConfigsQuery();

  if (!isSuccess) return null;

  if (config[0].slideShowPosition === 'NONE') return null;
  if (config[0].slideShowPosition === 'TOP') {
    return (
      <>
        <LeftSide />
        <RightSide />
      </>
    );
  }
  return (
    <>
      <RightSide />
      <LeftSide />
    </>
  );
};

export default AllCameraListContainer;
