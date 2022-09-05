import React from 'react';

import AdminLayout from '../AdminLayout';
import AdImages from './AddImages/AddImages';
import PhotoImages from './PhotoImages/PhotoImages';
const DefaultImagesContainer = () => {
  return (
    <AdminLayout>
      <PhotoImages />
      <AdImages />
    </AdminLayout>
  );
};

export default DefaultImagesContainer;
