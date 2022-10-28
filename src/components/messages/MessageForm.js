import { Box, Grid } from '@mui/material';
import React from 'react';
import { useGetConfigsQuery } from '../../features/userConfig/userConfigApiSlice';
import LeftItems from './LeftItems/LeftItems';
import RightItems from './RightItems/RightItems';

const MessageForm = () => {
  const { data, isSuccess } = useGetConfigsQuery();

  if (!isSuccess || data.length <= 0) return null;
  return (
    <Box
      sx={{ py: '50px', px: '30px', width: '100%', boxSizing: 'border-box' }}
    >
      <Grid container gap={4}>
        <Grid xs={12} md={5}>
          <LeftItems />
        </Grid>
        <Grid xs={12} md={6}>
          <RightItems />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MessageForm;
