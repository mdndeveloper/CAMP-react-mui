import { TextField } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';

const Form = () => {
  return (
    <div>
      <Stack direction='row' gap={4} sx={{ py: '12px' }}>
        <div>
          <Box sx={{ flex: 1 }}>
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label='Lan Address'
              variant='outlined'
              placeholder='Input here'
              defaultValue={'127.0.0.1'}
              fullWidth
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
              label='Port'
              variant='outlined'
              placeholder={'Port'}
              value={8000}
              fullWidth
            />
          </Box>
        </div>
      </Stack>
    </div>
  );
};

export default Form;
