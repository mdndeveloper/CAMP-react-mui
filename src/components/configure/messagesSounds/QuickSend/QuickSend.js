import { LoadingButton } from '@mui/lab';
import { Box, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect } from 'react';
import Card from '../../Card';

import moment from 'moment';
import { useForm } from 'react-hook-form';
import { useAddElementMutation } from '../../../../features/userElement/userElementApiSlice';
import { getAuthUserId } from '../../../../utils/auth';
import ListTable from './List';

const QuickSend = () => {
  const [addElement, { isLoading, isSuccess }] = useAddElementMutation();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    if (isSuccess) {
      reset();
    }
  }, [reset, isSuccess]);

  const submitHandler = (values) => {
    addElement({
      userId: getAuthUserId(),
      type: 'quick-send',
      ...values,
      deletedAt: moment(),
    });
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Card title={'Quick Send'} color='#6087d4'>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          gap={4}
          sx={{ py: '12px' }}
        >
          <div>
            <Box sx={{ flex: 1 }}>
              <TextField
                InputLabelProps={{
                  shrink: true,
                }}
                label='Create Quick Send'
                variant='outlined'
                fullWidth
                {...register('displayName', {
                  required: 'This field is required!',
                })}
                error={!!errors.displayName}
                helperText={errors?.displayName?.message || ''}
              />
            </Box>
          </div>

          <div>
            <LoadingButton
              loading={isLoading}
              variant='contained'
              type='submit'
              //   sx={{ background: '#82da73' }}
            >
              Add
            </LoadingButton>
          </div>
        </Stack>

        <ListTable />
      </Card>
    </form>
  );
};

export default QuickSend;
