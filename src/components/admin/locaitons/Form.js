import { Button, Grid, TextField } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';

const Form = () => {
  return (
    <form>
      <Grid container justifyContent={'center'}>
        <Grid xs={12} sm={8} md={6}>
          <Stack direction='row' gap={2} alignItems={'center'}>
            <Box sx={{ flex: 1 }}>
              <TextField
                InputLabelProps={{
                  shrink: true,
                }}
                label='SEARCH CAMP'
                variant='outlined'
                placeholder='Begin typing camp name here'
                fullWidth
              />
            </Box>
            <div>
              <Button variant='contained' sx={{ background: '#82da73' }}>
                Go
              </Button>
            </div>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
