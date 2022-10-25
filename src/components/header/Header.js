import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import logoImage from '../../assets/images/logo.png';

const Header = () => {
  return (
    <Box
      sx={{
        background: '#fff',
        boxShadow: '0px 0px 10px -4px #000',
        height: '90px',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      <div className=''>
        <Grid container alignItems={'center'}>
          <Grid xs={3}>
            <Box as='div' sx={{ width: '200px', height: '90px' }}>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
                as='img'
                src={logoImage}
                alt=''
              />
            </Box>
          </Grid>
          <Grid xs={9}>
            <RightSide />
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default Header;

const RightSide = () => {
  const { user, isAuthenticated, proxy } = useSelector((state) => state.auth);
  const text = useMemo(() => {
    if (!isAuthenticated) return '';

    const { is_admin, username } = user;
    const { isProxy, data } = proxy;

    if (is_admin && !isProxy) return 'Master Admin';
    if (is_admin && isProxy) return data.username;

    return username;
  }, [user, isAuthenticated, proxy]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'end', mr: '20px' }}>
      <div>
        <p>{text}</p>
      </div>
    </Box>
  );
};
