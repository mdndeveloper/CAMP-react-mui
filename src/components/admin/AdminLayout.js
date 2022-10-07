import { Divider, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AdminLayout = ({ children }) => {
  return (
    <>
      <Typography
        variant='h5'
        sx={{ textTransform: 'uppercase', mb: '15px' }}
        component={'h2'}
      >
        Admin Portal
      </Typography>
      <Divider />

      <Box as='div' sx={{ mt: '15px', pb: '0px' }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} gap={'15px'}>
          <LinkItem text='Locations' url='/admin/locations' />
          <LinkItem text='Default Messages' url='/admin/default-messages' />
          <LinkItem text='Default Images' url='/admin/default-images' />
        </Stack>
      </Box>
      <Divider />
      <div>{children}</div>
    </>
  );
};

const LinkItem = ({ url, text }) => {
  const { pathname } = useLocation();
  return (
    <Box
      as={Link}
      sx={{
        display: 'block',
        textDecoration: 'none',
        color: pathname === url ? '#81b1d9' : '#4f4f4f',
        fontSize: '20px',
        fontWeight: 600,
        transition: 'all 0.5s',
        '&:hover': {
          color: '#81b1d9',
        },
        borderBottom: pathname === url ? '2px solid #81b1d9' : 0,
        pb: '5px',
      }}
      to={url}
    >
      {text}
    </Box>
  );
};

export default AdminLayout;
