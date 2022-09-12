import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  FormHelperText,
  Modal,
  OutlinedInput,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateStreamAsync } from '../../../../../features/stream/thunks';
import { getAuthUserId } from '../../../../../utils/auth';
import Toggle from './Toggle';

const EditCamera = ({ open, setOpen, id }) => {
  const cameraData = useSelector((state) => {
    return state.stream?.data?.find((i) => i.id === id);
  });
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      status: cameraData?.status || 0,
      blankStatus: cameraData?.blankStatus || 0,
      cameraName: cameraData?.cameraName || '',
      ipAddress: cameraData?.ipAddress || '',
      backDisplay: cameraData?.backDisplay || 0,
    },
  });

  const dispatch = useDispatch();
  const submitHandler = (values) => {
    const data = {
      ...values,
      userId: getAuthUserId(),
    };
    dispatch(
      updateStreamAsync({
        id,
        data,
        callBack: (result) => {
          if (result) {
            reset();
            setOpen(false);
          }
        },
      })
    );
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={styles.main} component={Paper}>
          <Box
            sx={styles.content}
            onClick={() => setOpen(false)}
            component='div'
          >
            <CloseIcon />
          </Box>
          <form onSubmit={handleSubmit(submitHandler)}>
            <Box as='div' sx={{ width: '100%' }}>
              <div>
                <Typography>Web Cams:</Typography>
                <OutlinedInput
                  id='component-outlined'
                  {...register('cameraName', {
                    required: 'This field is required!',
                  })}
                  fullWidth
                  size='small'
                />
                <div>
                  {errors?.cameraName && (
                    <FormHelperText sx={{ color: 'red' }}>
                      {errors.cameraName.message}
                    </FormHelperText>
                  )}
                </div>
              </div>

              <div>
                <Typography>IP Address:</Typography>
                <OutlinedInput
                  id='component-outlined'
                  {...register('ipAddress', {
                    required: 'This field is required!',
                  })}
                  fullWidth
                  size='small'
                />
                <div>
                  {errors?.ipAddress && (
                    <FormHelperText sx={{ color: 'red' }}>
                      {errors.ipAddress.message}
                    </FormHelperText>
                  )}
                </div>
              </div>
              <Stack
                direction='row'
                spacing={3}
                alignItems='center'
                sx={{ mt: 2 }}
              >
                <Typography>Status</Typography>
                <Toggle
                  {...register('status')}
                  onChange={(e) => {
                    setValue('status', e.target.checked ? 1 : 0);
                  }}
                  checked={watch('status')}
                />
                <div>
                  {errors?.status && (
                    <FormHelperText sx={{ color: 'red' }}>
                      {errors.status.message}
                    </FormHelperText>
                  )}
                </div>
              </Stack>
              <Stack
                direction='row'
                spacing={3}
                alignItems='center'
                sx={{ mt: 2 }}
              >
                <Typography>Blink</Typography>
                <Toggle
                  {...register('backDisplay')}
                  onChange={(e) => {
                    setValue('backDisplay', e.target.checked ? 1 : 0);
                  }}
                  checked={watch('backDisplay')}
                />
                <div>
                  {errors?.backDisplay && (
                    <FormHelperText sx={{ color: 'red' }}>
                      {errors.backDisplay.message}
                    </FormHelperText>
                  )}
                </div>
              </Stack>
              <Stack
                direction='row'
                spacing={3}
                alignItems='center'
                sx={{ mt: 2 }}
              >
                <Typography>Blink</Typography>
                <Toggle
                  {...register('blankStatus')}
                  onChange={(e) => {
                    setValue('blankStatus', e.target.checked ? 1 : 0);
                  }}
                  checked={watch('blankStatus')}
                />
                <div>
                  {errors?.blankStatus && (
                    <FormHelperText sx={{ color: 'red' }}>
                      {errors.blankStatus.message}
                    </FormHelperText>
                  )}
                </div>
              </Stack>
            </Box>

            {/* submit button */}
            <Box sx={styles.submitButton}>
              <Button variant='contained' type='submit'>
                Update Camera
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default EditCamera;

const styles = {
  main: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {
      xs: '70%',
      md: '35%',
      xl: '30%',
    },
    bgcolor: 'background.paper',
    p: 4,
    overflowX: 'auto',
    height: {
      xs: '60vh',
      md: '80vh',
      xl: 'auto',
    },
  },
  content: {
    display: 'flex',
    justifyContent: 'end',
    ':hover': {
      cursor: 'pointer',
    },
  },

  submitButton: {
    display: 'flex',
    justifyContent: 'start',
    my: '10px',
  },
};
