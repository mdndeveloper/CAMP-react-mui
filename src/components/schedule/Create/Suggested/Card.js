import { Divider, Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Card = (props) => {
  const {
    children,
    title,
    color = '#fc74da',
    hasButton = false,
    button,
  } = props;
  return (
    <Box
      as={Paper}
      sx={{
        boxSizing: 'border-box',
        px: '10px',
        borderRadius: '10px',
        mt: '30px',
      }}
    >
      <Stack
        direction={hasButton ? 'row' : 'column'}
        justifyContent='space-between'
        alignItems={hasButton ? 'center' : 'start'}
      >
        <Box
          sx={{
            py: '15px',
            pl: '10px',
            width: {
              xs: '95%',
              md: '40%',
            },
            borderTop: `3px solid ${color}`,
          }}
        >
          <Typography
            variant='body1'
            sx={{ textTransform: 'uppercase', color }}
            component={'h2'}
          >
            {title}
          </Typography>
        </Box>
        {hasButton && button}
      </Stack>
      <Divider />
      <Box sx={{ boxSizing: 'border-box', p: '10px' }}>
        <h2>{children}</h2>
      </Box>
    </Box>
  );
};

export default Card;
