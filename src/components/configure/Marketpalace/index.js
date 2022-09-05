import { Box, Grid, Switch, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import ConfigureLayout from '../ConfigureLayout';
const MarketplaceContainer = () => {
  return (
    <ConfigureLayout>
      <Grid container sx={{ mt: '50px' }}>
        <Grid xs={12} md={4}>
          <Box
            sx={{
              boxShadow: '0 0 10px 0 #c1c1c1',
              boxSizing: 'border-box',
              p: '20px 10px',
              borderRadius: '10px',
            }}
          >
            <Box>
              <Box sx={{ width: '200px', height: '200px', margin: 'auto' }}>
                <Box
                  as='img'
                  src='https://images.pexels.com/photos/6347720/pexels-photo-6347720.jpeg?auto=compress&cs=tinysrgb&w=600'
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
              <Typography
                variant='body2'
                sx={{ textAlign: 'center', mt: '15px' }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatibus in repellendus adipisci atque ipsa provident
              </Typography>
              <Stack
                direction='row'
                gap={1}
                alignItems='center'
                justifyContent={'center'}
                sx={{ mt: '20px' }}
              >
                <div>
                  <FaPencilAlt />
                </div>
                <div>
                  <Switch />
                </div>
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ConfigureLayout>
  );
};

export default MarketplaceContainer;
