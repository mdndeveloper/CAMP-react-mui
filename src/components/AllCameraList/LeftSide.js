import { Box } from '@mui/system';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fetchSlideShowAsync } from '../../features/slideShow/thunks';
import { useGetConfigsQuery } from '../../features/userConfig/userConfigApiSlice';
import useInnerSize from '../../hooks/useInnerSize';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const LeftSide = () => {
  const { height } = useInnerSize();
  const { photos } = useSelector((state) => state.slide);
  const { data: config, isSuccess } = useGetConfigsQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSlideShowAsync());
  }, [dispatch]);

  const formatePhotos = useMemo(() => {
    if (photos.length === 0) return [];
    return photos.reduce((acc, cur) => {
      const file = cur.blob ? `data:image/jpeg;base64,${cur.blob}` : '';
      acc.push({ ...cur, file });
      return acc;
    }, []);
  }, [photos]);

  const calculateHeight = useMemo(() => {
    if (!isSuccess) return '100vh';
    const slideShowPosition = config[0]?.slideShowPosition;
    if (slideShowPosition === 'NONE') return height;
    return height - (height / 100) * 70;
  }, [height, isSuccess, config]);

  return (
    <Box
      sx={{ height: calculateHeight, position: 'relative', overflow: 'hidden' }}
    >
      <Swiper
        pagination={true}
        autoplay={{
          delay: 1 * 1000,
        }}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        className='mySwiper'
      >
        {formatePhotos.map((item, i) => (
          <SwiperSlide key={i}>
            <Item item={item} imageHeight={calculateHeight} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

function Item({ imageHeight = 300, item }) {
  return (
    <>
      <Box
        as='div'
        sx={{
          width: '100%',
          height: imageHeight - 10,
          marginTop: '10px',
          marginBottom: '10px',
        }}
      >
        <Box
          as='img'
          src={item.file}
          sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </Box>
    </>
  );
}

export default LeftSide;
