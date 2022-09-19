import { Box, Divider, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Create from '../components/schedule/Create';
import Library from '../components/schedule/Library';
import { fetchMessagesAsync } from '../features/message/thunks';

const Schedule = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMessagesAsync());
  }, [dispatch]);
  return (
    <div>
      <Box sx={{}}>
        <Typography
          variant='h6'
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
