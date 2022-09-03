import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import Create from '../components/schedule/Create';
import Library from '../components/schedule/Library';

const Schedule = () => {
  return (
    <div>
      <Box sx={{}}>
        <Typography
          variant='h5'
          sx={{ textTransform: 'uppercase', mb: '15px' }}
          component={'h2'}
        >
          Schedule
        </Typography>

        <Divider />
        <Box
          sx={{
            boxSizing: 'border-box',
            borderRadius: '10px',
            mt: '30px',
          }}
        >
          <Create />
          <Library />
        </Box>
      </Box>
    </div>
  );
};

export default Schedule;
