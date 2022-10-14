import { LoadingButton } from '@mui/lab';
import { Box, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import {
  useGetConfigQuery,
  useUpdateConfigMutation,
} from '../../../../features/userConfig/userConfigApiSlice';
import { getAuthUserId } from '../../../../utils/auth';
import Card from '../../Card';
import SelectSound from './SelectSound';
const CheckIn = () => {
  const { data, isSuccess } = useGetConfigQuery(getAuthUserId());
  const [updateConfig, { isLoading }] = useUpdateConfigMutation();

  const duration = useMemo(() => {
    if (!isSuccess) return 0;
    return data[0].defaultDuration;
  }, [isSuccess, data]);

  const {
    register,
    setValue,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({
    checkInMessage: '',
    checkInSound: '',
  });

  useEffect(() => {
    if (isSuccess) {
      setValue('checkInMessage', data[0].checkInMessage);
      setValue('checkInSound', data[0].checkInSound);
    }
  }, [isSuccess, data, setValue]);

  const submitHandler = (values) => {
    updateConfig({ id: data[0].id, data: values });
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Card title={'Check IN'} color='#82da73'>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          gap={4}
          sx={{ py: '12px' }}
        >
          <Box>
            <Box sx={{ flex: 1 }}>
              <TextField
                InputLabelProps={{
                  shrink: true,
                }}
                label='Default Text'
                variant='outlined'
                placeholder='Input here'
                fullWidth
                type={'text'}
                {...register('checkInMessage', {
                  required: 'This field is required!',
                })}
                onChange={() => {}}
                error={!!errors.checkInMessage}
                helperText={errors?.checkInMessage?.message || ''}
              />
            </Box>
          </Box>
          <div>
            <Box sx={{ flex: 1, width: { xs: '100%', sm: '200px' } }}>
              <SelectSound
                value={watch('checkInSound')}
                setValue={(v) => setValue('checkInSound', v)}
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
                fullWidth
                value={duration}
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

export default CheckIn;
