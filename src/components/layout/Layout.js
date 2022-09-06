import { Box, Grid } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../header/Header';
import SideBar from '../sidebar/SideBar';

const arrays = ['/cameras', '/camera'];

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  if (arrays.includes(pathname)) {
    return children;
  }

  return (
    <div>
      <Header />
      <Grid container>
        <Grid xs={3} xl={2}>
          <SideBar />
        </Grid>
        <Grid xs={9} xl={10}>
          <Box sx={{ boxSizing: 'border-box', p: '30px' }}>{children}</Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
