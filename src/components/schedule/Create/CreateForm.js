import { Box, Button, FormHelperText, Grid, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { inactiveEditMode } from '../../../features/message/messageSlice';
import {
  addMessageAsync,
  updateMessageAsync,
} from '../../../features/message/thunks';
import { getAuthUserId } from '../../../utils/auth';
import DaysSelect from './DaysSelect';
const today = new Date();

const CreateForm = () => {
  const { editMode, editing } = useSelector((state) => state.messages);

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
    setValue,
    clearErrors,
    reset,
  } = useForm({
    defaultValues: {
      days: [],
      message: '',
      reoccur: '1',
      dateTime: null,
      duration: 90,
    },
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (editMode) {
      const { dateTime, message, duration } = editing;
      setValue('dateTime', dateTime);
      setValue('message', message);
      setValue('duration', duration);
    }
  }, [editMode, editing, setValue]);

  const submitHandler = (values) => {
    const data = {
      ...values,
      userId: getAuthUserId(),
      days: values.days.length,
    };

    const handler = editMode
      ? updateMessageAsync({ id: editing.id, data })
      : addMessageAsync(data);

    dispatch(handler);
    reset();
  };

  const dayChangeHandler = (value) => {
    setValue('days', value);
  };

  const cancelUpdateHandler = (e) => {
    e.preventDefault();
    dispatch(inactiveEditMode());
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Grid container>
        <Grid xs={12} md={4} sx={{ order: 1 }}>
          <Box sx={{ mr: { md: '10px' } }}>
            <TextField
              placeholder='Automated Messages:'
              multiline
              label='Message'
              rows={7}
              size='small'
              fullWidth
              {...register('message', {
                required: 'This field is required!',
                maxLength: {
                  value: 90,
                  message: 'Maximum 90 characters allowed!',
                },
              })}
            />

            <Stack
              direction='row'
              justifyContent={errors?.message ? 'space-between' : 'end'}
            >
              {errors?.message && (
                <FormHelperText sx={{ color: 'red' }}>
                  {errors.message.message}
                </FormHelperText>
              )}

              {watch('message')?.length <= 90 && (
                <Box>
                  <FormHelperText sx={{ color: 'red' }}>
                    {90 - watch('message').length} characters left
                  </FormHelperText>
                </Box>
              )}
            </Stack>
          </Box>
        </Grid>
        <Grid xs={12} md={4} sx={{ order: { xs: 3, md: 2 } }}>
          <Stack sx={{ mx: { md: '10px' } }} direction='column' gap={2}>
            <Box>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DateTimePicker
                  {...register('dateTime', {
                    required: 'This field is required!',
                  })}
                  minDate={today}
                  value={watch('dateTime')}
                  onChange={(newValue) => {
                    setValue('dateTime', newValue);
                    if (errors?.dateTime) {
                      clearErrors('dateTime');
                    }
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label='Date and Time' fullWidth />
                  )}
                />
              </LocalizationProvider>
              {errors?.dateTime && (
                <FormHelperText sx={{ color: 'red' }}>
                  {errors.dateTime.message}
                </FormHelperText>
              )}
            </Box>
            <Box text={'Duration'} width={'100%'}>
              <TextField
                placeholder=''
                label='Duration'
                size='small'
                type='number'
                {...register('duration', {
                  required: 'This field is required!',
                })}
                fullWidth
              />
            </Box>
            <Stack direction={'row'} gap={1}>
              <Button type='submit' variant='contained'>
                {editMode ? 'Update' : 'Add'}
              </Button>
              {editMode && (
                <Button
                  onClick={cancelUpdateHandler}
                  type='button'
                  variant='contained'
                  color='warning'
                >
                  Cancel
                </Button>
              )}
            </Stack>
          </Stack>
        </Grid>
        <Grid
          xs={12}
          md={4}
          sx={{ order: { xs: 2, md: 3 }, mb: { xs: 1, md: 0 } }}
        >
          <Box sx={{ width: '100%' }}>
            <DaysSelect days={watch('days')} setDays={dayChangeHandler} />
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default CreateForm;
