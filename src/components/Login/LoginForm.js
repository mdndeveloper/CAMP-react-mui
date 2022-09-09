import {
  Alert,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  OutlinedInput,
  Stack,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { loginAsync } from '../../features/login/thunks';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { error: errorsState, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submitHandler = (values) => {
    dispatch(loginAsync(values));
  };

  if (isAuthenticated) {
    return <Navigate to='/messages' />;
  }

  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems={'center'}
      sx={styles.main}
    >
      <Grid xs={12} sm={12} md={9}>
        <Typography variant='h6' component={'h3'} sx={styles.title}>
          Preschool Reports Communication Platform
        </Typography>
        <Box component='div' sx={styles.content}>
          <Grid container>
            <Grid xs={12} sm={8} md={8}>
              <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                  <Typography
                    variant='h6'
                    component={'h3'}
                    sx={styles.formTitle}
                  >
                    Login Here!
                  </Typography>
                </div>
                {errorsState && <Alert severity='error'>{errorsState}</Alert>}
                <br />
                {/* username input */}
                <div>
                  <Grid container alignItems={'center'}>
                    <Grid xs={12} sm={3} md={3}>
                      <Typography variant='subtitle1' component={'p'}>
                        Username
                      </Typography>
                    </Grid>
                    <Grid xs={12} sm={9} md={9}>
                      <FormControl fullWidth>
                        <OutlinedInput
                          id='component-outlined'
                          {...register('username', {
                            required: 'This field is required!',
                          })}
                          size='small'
                        />

                        {/* <FormHelperText sx={{ color: 'red' }}>Error</FormHelperText> */}
                      </FormControl>
                    </Grid>
                  </Grid>
                  {errors?.message && (
                    <Grid container sx={{}}>
                      <Grid sm={3}></Grid>
                      <Grid sm={9}>
                        <FormHelperText sx={{ color: 'red' }}>
                          {errors.message}
                        </FormHelperText>
                      </Grid>
                    </Grid>
                  )}
                </div>
                {/* password input */}
                <div>
                  <Grid container alignItems={'center'} sx={{ pt: 2 }}>
                    <Grid xs={12} sm={3} md={3}>
                      <Typography variant='subtitle1' component={'p'}>
                        Password
                      </Typography>
                    </Grid>
                    <Grid xs={12} sm={9} md={9}>
                      <FormControl fullWidth>
                        <OutlinedInput
                          id='component-outlined'
                          type='password'
                          size='small'
                          {...register('password', {
                            required: 'This field is required!',
                          })}
                        />
                      </FormControl>
                    </Grid>

                    {errors?.password && (
                      <Grid container sx={{}}>
                        <Grid sm={3}></Grid>
                        <Grid sm={9}>
                          <FormHelperText sx={{ color: 'red' }}>
                            {errors.password.message}
                          </FormHelperText>
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                </div>
                <Box component={'div'} sx={{ my: '5px' }}>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox {...register('remember')} />}
                      label='Remember me'
                    />
                  </FormGroup>
                </Box>
                {/* submit button and forgot password */}
                <Grid container alignItems={'center'} sx={{}}>
                  <Grid xs={3}></Grid>
                  <Grid xs={9}>
                    <Stack
                      direction={'row'}
                      spacing={2}
                      sx={{ alignItems: 'center' }}
                    >
                      <div>
                        <Button
                          variant='contained'
                          size='small'
                          color='primary'
                          type='submit'
                        >
                          Sign In
                        </Button>
                      </div>
                      <div>
                        <Box component={Link} to='/dd' sx={styles.forgotButton}>
                          Forgot your password?
                        </Box>
                      </div>
                    </Stack>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
          <Box component={'div'} sx={{ mt: '35px' }}>
            <div>
              <b>Need assistance or training?</b>
              <span>visit your pb&jTV Team at:</span>
              <Link to={'http://pbjtv.zendesk.com'} target={'_blank'}>
                http://pbjtv.zendesk.com
              </Link>
            </div>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginForm;

const styles = {
  main: { height: '100vh', boxSizing: 'border-box' },
  title: {
    pb: 1 /*fontFamily: 'QwitcherBychen'*/,
    mx: {
      xs: '10px',
      md: '0px',
    },
  },
  content: {
    border: '1px solid #919095',
    padding: '30px',
    boxSizing: 'border-box',
    borderRadius: '10px',
    mx: {
      xs: '10px',
      md: '0px',
    },
  },
  formTitle: { mb: 2, color: '#919095' },
  forgotButton: {
    color: 'red',
    textDecoration: 'none',
    textTransform: 'capitalize',
    transition: 'all 0.5s',
    ':hover': {
      color: 'blue',
    },
  },
};
