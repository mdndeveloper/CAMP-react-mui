import { Box } from '@mui/material';
import React from 'react';
import Card from '../../Card';
import Form from './Form';
import Table from './Table';

const StreamSetup = () => {
  return (
    <Box>
      <Card title='Stream Setup' color='#6087d4'>
        <Form />
        <Table />
      </Card>
    </Box>
  );
};

export default StreamSetup;
