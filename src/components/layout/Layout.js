import { Box, Grid } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import useInnerSize from '../../hooks/useInnerSize';
import Header from '../header/Header';
import SideBar from '../sidebar/SideBar';

const arrays = ['/cameras', '/camera', '/login', '/', '/back-display'];

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const { height } = useInnerSize();
  if (arrays.includes(pathname)) {
    return children;
  }

  return (
    <div>
      <Header />
      <Grid container>
        <Grid xs={2} sm={1} md={3} xl={2}>
          <SideBar />
        </Grid>
        <Grid xs={10} sm={11} md={9} xl={10}>
          <Box
            sx={{
              boxSizing: 'border-box',
              p: '30px',
              height: height - 90,
              overflow: 'auto',
            }}
          >
            {children}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
