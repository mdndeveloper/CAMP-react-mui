import { Box, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import Card from '../../Card';
import SelectSound from './SelectSound';
const InterView = () => {
  return (
    <div>
      <Card title={'Interview'} color='#9b55d6'>
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
                label='Create Interview Yard'
                variant='outlined'
                fullWidth
                rows={4}
                multiline
              />
            </Box>
          </div>
          <div>
            <Box
              sx={{
                flex: 1,
                width: {
                  xs: '95%',
                  md: '200px',
                },
              }}
            >
              <SelectSound />
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
                value={90}
                fullWidth
              />
            </Box>
          </div>
        </Stack>
      </Card>
    </div>
  );
};

export default InterView;
