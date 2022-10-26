import { LoadingButton } from '@mui/lab';
import { Box, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  useGetConfigQuery,
  useUpdateConfigMutation,
} from '../../../../features/userConfig/userConfigApiSlice';
import { getAuthUserId } from '../../../../utils/auth';
import Card from '../../Card';
import SelectSound from '../SelectSound';
const CheckOut = () => {
  const { data, isSuccess } = useGetConfigQuery(getAuthUserId());
  const [updateConfig, { isLoading }] = useUpdateConfigMutation();

  const {
    register,
    setValue,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({
    checkOutMessage: '',
    checkOutSound: '',
    checkOutDuration: 0,
  });

  useEffect(() => {
    if (isSuccess && data.length > 0) {
      setValue('checkOutMessage', data[0].checkOutMessage);
      setValue('checkOutSound', data[0].checkOutSound);
      setValue('checkOutDuration', data[0].checkOutDuration);
    }
  }, [isSuccess, data, setValue]);

  const submitHandler = (values) => {
    updateConfig({ id: data[0].id, data: values });
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Card title={'Check Out'} color='#f46969'>
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
                label='Default Text'
                variant='outlined'
                placeholder='Input here'
                defaultValue={'- is here to play'}
                fullWidth
                {...register('checkOutMessage', {
                  required: 'This field is required!',
                })}
                onChange={() => {}}
                error={!!errors.checkOutMessage}
                helperText={errors?.checkOutMessage?.message || ''}
              />
            </Box>
          </div>
          <div>
            <Box sx={{ flex: 1, width: { xs: '100%', sm: '200px' } }}>
              <SelectSound
                value={watch('checkOutSound')}
                setValue={(v) => setValue('checkOutSound', v)}
              />
            </Box>
          </div>
          <div>
            <Box sx={{ flex: 1 }}>
              <TextField
                InputLabelProps={{
                  shrink: true,
                }}
                type='number'
                label='Duration (sec)'
                variant='outlined'
                placeholder={'input here'}
                defaultValue={90}
                fullWidth
                {...register('checkOutDuration', {
                  required: 'This field is required!',
                })}
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
              Save
            </LoadingButton>
          </div>
        </Stack>
      </Card>
    </form>
  );
};

export default CheckOut;
