import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  Checkbox,
  FormHelperText,
  Grid,
  Modal,
  OutlinedInput,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

import { FormLabel } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  useEditUserMutation,
  useGetUsersQuery,
} from '../../../../features/admin/userApiSlice';
import styles from './configureFormstyles';
import CustomSelect from './CustomSelect';
import TIMEZONES from './timezones';

const CameraEditModal = ({ open, setOpen, id }) => {
  const [timezones, setTimezones] = useState([]);

  const { data: allUsers } = useGetUsersQuery();

  const [editUser, { isSuccess }] = useEditUserMutation();

  useEffect(() => {
    const timezones = TIMEZONES.sort((a, b) => {
      if (a.offset > b.offset) return 1;
      if (a.offset < b.offset) return -1;
      return 0;
    }).reduce((acc, cur) => {
      acc.push({ label: cur.text, value: cur.offset });
      return acc;
    }, []);
    setTimezones(timezones);
  }, []);

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      is_admin: false,
    },
  });

  const submitHandler = (data) => {
    editUser({ id, data });
  };

  useEffect(() => {
    const data = allUsers?.find((i) => i.id === id);
    setValue('cname', data?.cname);
    setValue('username', data?.username);
    setValue('password', data?.password);
    setValue('timezone', data?.timezone);
    setValue('contactno', data?.contactno);
    setValue('email', data?.email);
    setValue('location', data?.location);
    setValue('is_admin', data?.is_admin);
  }, [allUsers, setValue, id]);

  useEffect(() => {
    if (isSuccess) {
      reset();
      setOpen(false);
    }
  }, [isSuccess, reset, setOpen]);

  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false, reset);
        }}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={styles.main} component={Paper}>
          <Box
            sx={styles.content}
            onClick={() => setOpen(false, reset)}
            component='div'
          >
            <CloseIcon />
          </Box>
          <form onSubmit={handleSubmit(submitHandler)}>
            <Grid container>
              <Grid xs={12} md={6} sx={{ mb: { xs: 2, md: 0 } }}>
                <Stack
                  spacing={3}
                  component='div'
                  sx={{ mr: { xs: 0, md: 2 } }}
                >
                  <div>
                    <InputLabel text='Center Name' />

                    <OutlinedInput
                      {...register('cname', {
                        required: 'This field is required!',
                      })}
                      size='small'
                      fullWidth
                    />
                    {errors?.cname && (
                      <FormHelperText sx={{ color: 'red' }}>
                        {errors.cname.message}
                      </FormHelperText>
                    )}
                  </div>
                  <div>
                    <InputLabel text='Username' />

                    <OutlinedInput
                      {...register('username', {
                        required: 'This field is required!',
                      })}
                      size='small'
                      fullWidth
                    />
                    {errors?.username && (
                      <FormHelperText sx={{ color: 'red' }}>
                        {errors.username.message}
                      </FormHelperText>
                    )}
                  </div>
                  <div>
                    <InputLabel text='Password' />

                    <OutlinedInput
                      {...register('password', {
                        required: 'This field is required!',
                      })}
                      type='password'
                      size='small'
                      fullWidth
                    />
                    {errors?.password && (
                      <FormHelperText sx={{ color: 'red' }}>
                        {errors.password.message}
                      </FormHelperText>
                    )}
                  </div>
                  <div>
                    <InputLabel text='Timezone' />

                    <CustomSelect
                      {...register('timezone')}
                      values={timezones}
                      onChange={(e) => {
                        setValue('timezone', e.target.value);
                      }}
                      value={watch('timezone')}
                    />

                    {errors?.timezone && (
                      <FormHelperText sx={{ color: 'red' }}>
                        {errors.timezone.message}
                      </FormHelperText>
                    )}
                  </div>
                </Stack>
              </Grid>

              <Grid xs={12} md={6} sx={{ mb: { xs: 2, md: 0 } }}>
                <Stack
                  spacing={3}
                  component='div'
                  sx={{ ml: { xs: 0, md: 2 } }}
                >
                  <div>
                    <InputLabel text='Contact#' />

                    <OutlinedInput
                      {...register('contactno', {
                        required: 'This field is required!',
                      })}
                      size='small'
                      fullWidth
                    />
                    {errors?.contactno && (
                      <FormHelperText sx={{ color: 'red' }}>
                        {errors.contactno.message}
                      </FormHelperText>
                    )}
                  </div>
                  <div>
                    <InputLabel text='Email' />

                    <OutlinedInput
                      {...register('email', {
                        required: 'This field is required!',
                      })}
                      type='email'
                      size='small'
                      fullWidth
                    />
                    {errors?.email && (
                      <FormHelperText sx={{ color: 'red' }}>
                        {errors.email.message}
                      </FormHelperText>
                    )}
                  </div>
                  <div>
                    <InputLabel text='Location' />

                    <OutlinedInput
                      {...register('location', {
                        required: 'This field is required!',
                      })}
                      size='small'
                      fullWidth
                    />
                    {errors?.location && (
                      <FormHelperText sx={{ color: 'red' }}>
                        {errors.location.message}
                      </FormHelperText>
                    )}
                  </div>
                </Stack>
              </Grid>
            </Grid>

            <div>
              <Checkbox
                checked={!!watch('is_admin') || false}
                onChange={(_, value) => setValue('is_admin', !!value)}
              />
              <FormLabel> Is Admin </FormLabel>

              {errors?.is_admin && (
                <FormHelperText sx={{ color: 'red' }}>
                  {errors.is_admin.message}
                </FormHelperText>
              )}
            </div>

            {/* submit button */}
            <Box sx={styles.submitButton}>
              <Button variant='contained' type='submit'>
                Update
              </Button>
              <Button
                onClick={() => setOpen(false)}
                variant='contained'
                color='error'
                type='button'
              >
                Cancel
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

const InputLabel = ({ text }) => {
  return (
    <Typography variant='body2' sx={{ fontWeight: 'bold' }} component='h2'>
      {text}
    </Typography>
  );
};

export default CameraEditModal;
