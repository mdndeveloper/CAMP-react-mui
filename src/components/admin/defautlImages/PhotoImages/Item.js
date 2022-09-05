import { Box } from '@mui/system';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Item = ({ onlyImage = false, image }) => {
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
            '.image-overlay': {
              top: 0,
            },
          },
        }}
      >
        <Box
          as='img'
          src={image}
          sx={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
        {!onlyImage && (
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: '#ffffffab',
              top: '100%',
              left: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all .5s',
            }}
            as='div'
            className='image-overlay'
          >
            <Box
              sx={{
                fontSize: '35px',
                '&:hover': {
                  cursor: 'pointer',
                  color: 'red',
                },
              }}
            >
              <FaTrashAlt />
            </Box>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Item;
