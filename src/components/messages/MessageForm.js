import { Box, Grid } from '@mui/material';
import React from 'react';
import ExportCsv from './ExportCsv/ExportCsv';
import LeftItems from './LeftItems/LeftItems';
import RightItems from './RightItems/RightItems';

const MessageForm = () => {
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
        <Grid xs={12}>
          <ExportCsv />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MessageForm;
