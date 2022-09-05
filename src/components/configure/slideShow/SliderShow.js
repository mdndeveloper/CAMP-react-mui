import React from 'react';
import ConfigureLayout from '../ConfigureLayout';
import AdImages from './AddImages/AddImages';
import PhotoImages from './PhotoImages/PhotoImages';

const SliderShowContainer = () => {
  return (
    <ConfigureLayout>
      <PhotoImages />
      <AdImages />
    </ConfigureLayout>
  );
};

export default SliderShowContainer;
