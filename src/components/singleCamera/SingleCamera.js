import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchStreamAsync } from '../../features/stream/thunks';
import useInnerSize from '../../hooks/useInnerSize';
import RightSide from './RightSide';
const file = 'files/camsFront.html';

const SingleCameraContainer = () => {
  const { height } = useInnerSize();
  const dispatch = useDispatch();

  const isRight = false;

  const [searchParams] = useSearchParams();

  const cameras = useSelector((state) => state.stream.data);

  const camera = useMemo(() => {
    if (cameras.length === 0) return null;
    return cameras.find((c) => c.id === searchParams.get('id'));
  }, [cameras, searchParams]);

  useEffect(() => {
    dispatch(fetchStreamAsync());
  }, [dispatch]);
  return (
    <div>
      <Grid container>
        <Grid xs={isRight ? 10 : 12}>
          <Box
            sx={{
              height,
              overflow: 'hidden',
              border: '1px solid black',
            }}
          >
            {camera && (
              <iframe
                src={`${file}?${camera?.ipAddress}`}
                title={camera?.ipAddress}
                frameborder='0'
                width='100%'
              ></iframe>
            )}
          </Box>
        </Grid>
        {isRight && (
          <Grid xs={2}>
            <RightSide />
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default SingleCameraContainer;
