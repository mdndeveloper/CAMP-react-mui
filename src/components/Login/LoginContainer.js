import { Grid } from '@mui/material';
import React from 'react';
import LoginForm from './LoginForm';
import LoginLogo from './LoginLogo';

const LoginContainer = () => {
  return (
    <div>
      <Grid container>
        <Grid xs={12} sm={12} md={4}>
          <LoginLogo />
        </Grid>
        <Grid sx={12} sm={12} md={8}>
          <LoginForm />
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginContainer;
