import { Box, Button, Divider, Paper, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import CreateForm from './CreateForm';
import SuggestedModal from './SuggestedModal';

const Create = () => {
  const [isOpen, setIsOpen] = useState(false);
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
        direction='row'
        alignItems={'center'}
        justifyContent='space-between'
        flexWrap={'wrap'}
      >
        <Box
          sx={{
            py: '15px',
            pl: '10px',
            width: {
              xs: '95%',
              sm: '40%',
            },
            borderTop: '3px solid #5f7686',
          }}
        >
          <Typography
            variant='body1'
            sx={{ textTransform: 'uppercase' }}
            component={'h2'}
          >
            Create
          </Typography>
        </Box>
        <Button
          sx={{
            mb: {
              xs: '10px',
            },
          }}
          color={'secondary'}
          variant='outlined'
          size='small'
          onClick={() => setIsOpen(true)}
        >
          Create
        </Button>
      </Stack>
      <Divider />
      <Box sx={{ minHeight: '300px', boxSizing: 'border-box', p: '10px' }}>
        <CreateForm />
      </Box>
      <SuggestedModal open={isOpen} setIsOpen={setIsOpen} />
    </Box>
  );
};

export default Create;
