import { Box, Grid } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStreamAsync } from '../../features/stream/thunks';
import { useGetConfigQuery } from '../../features/userConfig/userConfigApiSlice';
import useInnerSize from '../../hooks/useInnerSize';
import { getAuthUserId } from '../../utils/auth';
import SingleCamera from './SingleCamera';

const LAYOUT_ITEMS = [
  {
    id: 1,
    columnCount: 1,
    rowCount: 1,
    orientation: null,
  },
  {
    id: 5,
    columnCount: 3,
    rowCount: 2,
    orientation: 'horizontal',
  },
  {
    id: 2,
    columnCount: 3,
    rowCount: 3,
    orientation: 'horizontal',
  },
  {
    id: 3,
    columnCount: 4,
    rowCount: 3,
    orientation: 'horizontal',
  },
  {
    id: 4,
    columnCount: 4,
    rowCount: 4,
    orientation: 'horizontal',
  },
];

const LAYOUT_ITEMS_WITH_NAME = LAYOUT_ITEMS.map((item) => {
  const { orientation, rowCount, columnCount } = item;
  const or = orientation ? `_${orientation}` : '';
  const name = `cam_${rowCount * columnCount}${or}`;
  return { ...item, name };
});

const RightSide = () => {
  const { height } = useInnerSize();

  const dispatch = useDispatch();

  const {
    data: config,
    isSuccess,
    isLoading,
  } = useGetConfigQuery(getAuthUserId());

  useEffect(() => {
    if (!isLoading) {
      dispatch(fetchStreamAsync());
    }
  }, [dispatch, isLoading]);

  const cameras = useSelector((state) => state.stream.data);
  const { row, col } = useMemo(() => {
    if (!isSuccess || config.length === 0) return { row: 1, col: 1 };

    const name = config[0].cameraDisplay;
    const cameraData = LAYOUT_ITEMS_WITH_NAME.find((i) => i.name === name);
    console.log({ row: cameraData.rowCount, col: cameraData.columnCount });
    return {
      row: cameraData.rowCount,
      col: cameraData.columnCount,
    };
  }, [config, isSuccess]);

  return (
    <Box sx={{ height: '100vh', overflow: 'hidden' }}>
      <Grid container>
        {cameras.slice(0, col * row).map((item) => (
          <Grid xs={12 / col} key={item.id}>
            <SingleCamera height={height / row} ipAddress={item.ipAddress} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RightSide;
