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
import SelectSound from '../SelectSound';
const TopInterview = () => {
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
    interviewMessage: '',
    interviewSound: '',
  });

  useEffect(() => {
    if (isSuccess) {
      setValue('interviewMessage', data[0].interviewMessage);
      setValue('interviewSound', data[0].interviewSound);
    }
  }, [isSuccess, data, setValue]);

  const submitHandler = (values) => {
    updateConfig({ id: data[0].id, data: values });
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
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
              {...register('interviewMessage', {
                required: 'This field is required!',
              })}
              onChange={() => {}}
              error={!!errors.interviewMessage}
              helperText={errors?.interviewMessage?.message || ''}
            />
          </Box>
        </div>
        <div>
          <Box sx={{ flex: 1, width: { xs: '100%', sm: '200px' } }}>
            <SelectSound
              value={watch('interviewSound')}
              setValue={(v) => setValue('interviewSound', v)}
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
    </form>
  );
};

export default TopInterview;
