import { Box } from '@mui/system';
import React from 'react';

const Item = ({ image }) => {
  return (
    <div>
      <Box
        sx={{
          width: '130px',
          height: '130px',
          borderRadius: '10px',
          overflow: 'hidden',
          position: 'relative',
          '&:hover': {
            cursor: 'pointer',
          },
        }}
      >
        <Box
          as='img'
          src={image}
          sx={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
      </Box>
    </div>
  );
};

export default Item;
