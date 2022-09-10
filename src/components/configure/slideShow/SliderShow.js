import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSlideShowAsync } from '../../../features/slideShow/thunks';
import ConfigureLayout from '../ConfigureLayout';
import AdImages from './AddImages/AddImages';
import PhotoImages from './PhotoImages/PhotoImages';

const SliderShowContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSlideShowAsync());
  }, [dispatch]);

  return (
    <ConfigureLayout>
      <PhotoImages />
      <AdImages />
    </ConfigureLayout>
  );
};

export default SliderShowContainer;
