import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
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

      <Box as='div' sx={{ mt: '15px', pb: '5px' }}>
        <Box as='div' sx={{ display: 'flex', gap: '15px' }}>
          <LinkItem text='Locations & Sounds' url='/admin/locations' />
          <LinkItem text='Default Messages' url='/admin/default-messages' />
          <LinkItem text='Default Images' url='/admin/default-images' />
        </Box>
      </Box>
      <Divider />
      <div>{children}</div>
    </>
  );
};

const LinkItem = ({ url, text }) => {
  return (
    <Box
      as={Link}
      sx={{
        display: 'block',
        textDecoration: 'none',
        color: '#4f4f4f',
        fontSize: '20px',
        transition: 'all 0.5s',
        '&:hover': {
          color: '#81b1d9',
        },
      }}
      to={url}
    >
      {text}
    </Box>
  );
};

export default AdminLayout;
