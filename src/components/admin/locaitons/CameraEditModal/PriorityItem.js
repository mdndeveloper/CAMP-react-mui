import { Button, Stack } from '@mui/material';
import React from 'react';

const PriorityItem = ({ children, buttonText, color = 'primary' }) => {
  return (
    <div>
      <Stack spacing={2} direction='row'>
        {children}
        <Button variant='contained' color={color} sx={styles.button}>
          {buttonText}
        </Button>
      </Stack>
    </div>
  );
};

export default PriorityItem;

const styles = {
  button: {
    textTransform: 'none',
    width: {
      xs: '100px',
      sm: '130px',
    },
    fontSize: {
      xs: 12,
      sm: 16,
    },
  },
};
