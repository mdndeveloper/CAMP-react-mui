import { Box } from '@mui/system';
import React, { useState } from 'react';
import Cams from './Cams';

import Form from './Form';

const LocationContainer = () => {
  const [search, setSearch] = useState('');
  return (
    <Box sx={{ mt: '30px' }}>
      <Box
        sx={{
          boxSizing: 'border-box',
          borderRadius: '10px',
          mt: '30px',
        }}
      >
        <Form setSearch={setSearch} search={search} />
        <Cams search={search} />
      </Box>
    </Box>
  );
};

export default LocationContainer;
