import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Add = () => {
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
            as='div'
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
      </div>
    </div>
  );
};

export default Add;
