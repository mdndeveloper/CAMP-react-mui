import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchStreamAsync } from '../../../features/stream/thunks';
import StreamSetup from './StreamSetup';

const StreamContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStreamAsync());
  }, [dispatch]);
  return (
    <div>
      <StreamSetup />
    </div>
  );
};

export default StreamContainer;
