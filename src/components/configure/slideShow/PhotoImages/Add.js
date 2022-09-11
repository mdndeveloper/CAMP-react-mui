import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addPhotosAsync } from '../../../../features/slideShow/thunks';

const Add = () => {
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    const data = {
      image: e.target.files[0],
      sliderTime: 90,
    };
    dispatch(addPhotosAsync(data));
  };

  return (
    <div>
      <div>
        <Box
          sx={{
            width: '130px',
            height: '130px',
            borderRadius: '4px',
            overflow: 'hidden',
            fontSize: '16px',
          }}
        >
          <Box
            as='label'
            htmlFor='imageInput'
            sx={{
              width: '100%',
              height: '100%',
              background: '#E0E0E0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          >
            <Stack gap={'4px'} alignItems='center'>
              <Typography
                variant='body2'
                sx={{ textTransform: 'uppercase', letterSpacing: '1px' }}
              >
                Upload
              </Typography>

              <Box
                sx={{
                  fontSize: '40px',
                }}
              >
                <FaPlus />
              </Box>
              <Typography
                variant='body2'
                sx={{
                  letterSpacing: '1px',
                  fontSize: '13px',
                }}
              >
                .jpg .jpeg .png
              </Typography>
              <Typography
                variant='body2'
                sx={{
                  letterSpacing: '1px',
                  fontSize: '10px',
                }}
              >
                File Limit of 365MB
              </Typography>
            </Stack>
          </Box>
        </Box>

        <Box
          as='input'
          type='file'
          accept='image/*'
          id='imageInput'
          onChange={onChangeHandler}
          sx={{ display: 'none' }}
        />
      </div>
    </div>
  );
};

export default Add;
