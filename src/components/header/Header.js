import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
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
          <Grid md={3}>
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
          <Grid md={9}>
            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
              <div>
                <p>Camp Bow Wow Convington</p>
              </div>
            </Box>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default Header;
