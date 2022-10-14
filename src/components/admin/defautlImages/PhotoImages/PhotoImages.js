import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSlideShowAsync } from '../../../../features/slideShow/thunks';
import Card from '../../Card';
import Add from './Add';
import Item from './Item';
const PHOTOS_BASE_URL =
  'https://dev.preschoolreports.com/admin/timthumb.php?src=admin/photo_slides/';

const PhotoImages = () => {
  const { photos } = useSelector((state) => state.slide);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSlideShowAsync());
  }, [dispatch]);

  const formatePhotos = useMemo(() => {
    if (photos.length === 0) return [];
    return photos.reduce((acc, cur) => {
      acc.push({ ...cur, file_name: PHOTOS_BASE_URL + cur.file_name });
      return acc;
    }, []);
  }, [photos]);

  return (
    <div>
      <Card title='Photo Images'>
        <Stack direction={'row'} gap={2} flexWrap={'wrap'}>
          {formatePhotos.map((item) => (
            <Item key={item.id} id={item.id} image={item.file_name} />
          ))}
          <Add />
        </Stack>
      </Card>
      <Box sx={{ fontSize: '14px', mt: '8px', ml: '10px' }}>
        *Suggested image size of x * x
      </Box>
    </div>
  );
};

export default PhotoImages;
