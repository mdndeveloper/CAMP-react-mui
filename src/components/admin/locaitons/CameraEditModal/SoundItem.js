import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const SoundItem = ({ children, buttonText, color = 'primary' }) => {
  return (
    <>
      <Stack
        spacing={0}
        alignItems={{
          xs: 'start',
          sm: 'center',
        }}
        direction={{ xs: 'column', sm: 'row' }}
      >
        <Stack
          direction='row'
          sx={{ order: { xs: 2, sm: 1 }, width: '100%' }}
          alignItems='center'
          spacing={2}
        >
          <Box sx={{ width: '100%' }}>{children}</Box>
          <div>
            <PlayArrowIcon />
          </div>
        </Stack>
        <Button color={color} sx={styles.button}>
          {buttonText}
        </Button>
      </Stack>
    </>
  );
};

export default SoundItem;

const styles = {
  button: {
    textTransform: 'none',
    width: {
      xs: 'auto',
      sm: '130px',
    },
    fontSize: {
      xs: 12,
      sm: 16,
    },
    order: { xs: 1, sm: 3 },
  },
};
