import { Box, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import Card from '../../Card';
import SelectSound from './SelectSound';
const QuickSend = () => {
  return (
    <div>
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
                multiline
                rows={4}
              />
            </Box>
          </div>
          <div>
            <Box sx={{ flex: 1, width: { xs: '100%', sm: '200px' } }}>
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
                label='Duration'
                variant='outlined'
                placeholder={'input here'}
                defaultValue={90}
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

export default QuickSend;
