import { Box, Button } from '@mui/material';
import React from 'react';
import Card from '../../Card';
import Form from './Form';
import Table from './Table';

const StreamSetup = () => {
  return (
    <Box>
      <Card
        title='Stream Setup'
        color='#6087d4'
        hasButton
        button={<CreateButton />}
      >
        <Form />
        <Table />
      </Card>
    </Box>
  );
};

const CreateButton = () => {
  return (
    <Button variant='contained' size='small' color='info'>
      Create
    </Button>
  );
};

export default StreamSetup;
