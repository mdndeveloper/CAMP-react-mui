import { LoadingButton } from '@mui/lab';
// import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import moment from 'moment';
import * as React from 'react';
import { useState } from 'react';

export default function ResponsiveDatePickers() {
  const [from, setFrom] = React.useState(moment());
  const [to, setTo] = React.useState(moment());
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Box as='div' sx={{ my: '10px' }}>
      {/* <Typography variant='body1' sx={{ mb: 1 }}>
        Export CSV
      </Typography> */}
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Stack
          spacing={3}
          direction={{ xs: 'column', sm: 'row' }}
          alignItems='center'
        >
          {/* from */}
          <div>
            <Box sx={{ display: { md: 'none' } }}>
              <MobileDatePicker
                label='From'
                value={from}
                onChange={(newValue) => {
                  setFrom(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />{' '}
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <DesktopDatePicker
                label='From'
                value={from}
                minDate={moment('2017-01-01')}
                onChange={(newValue) => {
                  setFrom(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Box>
          </div>
          {/* to */}
          <div>
            <Box sx={{ display: { md: 'none' } }}>
              <MobileDatePicker
                label='To'
                value={to}
                onChange={(newValue) => {
                  setTo(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />{' '}
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <DesktopDatePicker
                label='To'
                value={to}
                onChange={(newValue) => {
                  setTo(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </Box>
          </div>
          <div>
            <LoadingButton
              loading={isLoading}
              variant='contained'
              sx={{ background: '#6087d4', width: { xs: '100%', sm: '150px' } }}
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  setIsLoading(false);
                }, 1000 * 2);
              }}
            >
              Export CSV
            </LoadingButton>
          </div>
        </Stack>
      </LocalizationProvider>
    </Box>
  );
}
