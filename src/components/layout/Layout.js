import { Box, Grid } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../header/Header';
import SideBar from '../sidebar/SideBar';

const arrays = ['/cameras', '/camera'];

const Layout = ({ children }) => {
  const [divHeight, setDivHeight] = useState(0);
  const { pathname } = useLocation();
  const ref = useRef();

  useEffect(() => {
    setDivHeight(ref.current.clientHeight);
    return () => {
      setDivHeight(0);
    };
  }, [pathname]);

  if (arrays.includes(pathname)) {
    return children;
  }

  return (
    <div>
      <Header />
      <Grid container>
        <Grid xs={2} sm={1} md={3}>
          <SideBar elementHeight={divHeight} />
        </Grid>
        <Grid xs={10} sm={11} md={9}>
          <Box ref={ref} sx={{ boxSizing: 'border-box', p: '30px' }}>
            {children}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
