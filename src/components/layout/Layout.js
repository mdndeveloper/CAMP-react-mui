import { Box, Grid } from '@mui/material';
import React from 'react';
import Header from '../header/Header';
import SideBar from '../sidebar/SideBar';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Grid container>
        <Grid xs={3} xl={2}>
          <SideBar />
        </Grid>
        <Grid xs={9} xl={10}>
          <Box sx={{ boxSizing: 'border-box', pt: '30px', pl: '30px' }}>
            {children}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
