import { Box, Grid } from '@mui/material';
import React from 'react';

import logo from '../../assets/images/logo.png';

const RightSideArea = () => {
  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems='center'
      sx={styles.main}
      xs={12}
    >
      <Box component='div' sx={styles.imageWrapper}>
        <Box sx={{ fontSize: 37, textAlign: 'right', mb: '20px' }} as={'h2'}>
          5: 00 am
        </Box>
        <Box component='img' sx={styles.image} alt='logo' src={logo} />
      </Box>
    </Grid>
  );
};

export default RightSideArea;

const styles = {
  main: {
    background: `linear-gradient(139deg,#e1d0e4,#e1d0e4, #fcf9fd)`,
    py: '30px',
    height: {
      xs: 'auto',
      md: '100vh',
    },
  },
  imageWrapper: {
    height: 300,
    width: 350,
    maxHeight: { xs: 233, md: 350 },
    maxWidth: { xs: 350, md: 300 },
  },
  image: { height: '100%', width: '100%', objectFit: 'contain' },
};
