import { Box, Grid } from '@mui/material';
import React from 'react';
import useInnerSize from '../../hooks/useInnerSize';
import SingleCamera from './SingleCamera';

const RightSide = () => {
  const col = 3;
  const row = 3;

  const { height } = useInnerSize();

  return (
    <Box sx={{ height: '100vh', overflow: 'hidden' }}>
      <Grid container>
        {LIST.slice(0, col * row).map((image) => (
          <Grid xs={12 / col}>
            <SingleCamera height={height / row} image={image.image} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RightSide;

const LIST = [
  {
    id: 1,
    image:
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    image:
      'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    image:
      'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    image:
      'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 5,
    image:
      'https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 6,
    image:
      'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 7,
    image:
      'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 8,
    image:
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 9,
    image:
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 10,
    image:
      'https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 11,
    image:
      'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 12,
    image:
      'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 13,
    image:
      'https://images.pexels.com/photos/13517201/pexels-photo-13517201.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    id: 14,
    image:
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 15,
    image:
      'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 16,
    image:
      'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 17,
    image:
      'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 18,
    image:
      'https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 19,
    image:
      'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 20,
    image:
      'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 21,
    image:
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 22,
    image:
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 23,
    image:
      'https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 24,
    image:
      'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 25,
    image:
      'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 26,
    image: '',
  },
  {
    id: 27,
    image:
      'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 28,
    image:
      'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 29,
    image:
      'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 30,
    image:
      'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];
