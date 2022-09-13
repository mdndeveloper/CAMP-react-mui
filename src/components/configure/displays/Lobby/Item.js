import { Box, Grid, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useUpdateConfigMutation } from '../../../../features/userConfig/userConfigApiSlice';

const Item = (props) => {
  const { rowCount = 1, columnCount = 1, name, orientation, configId } = props;
  const height = 130 + 50;
  const width = 150 + 50;

  const [updateConfig] = useUpdateConfigMutation();

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const or = orientation ? `_${orientation}` : '';
    const re = name === `cam_${rowCount * columnCount}${or}`;
    setIsActive(re);
  }, [name, orientation, rowCount, columnCount]);

  const updateHandler = () => {
    const or = orientation ? `_${orientation}` : '';
    const cameraDisplay = `cam_${rowCount * columnCount}${or}`;
    updateConfig({ id: configId, data: { cameraDisplay } });
  };

  return (
    <Box component='div' sx={{ mb: 1 }}>
      <Stack
        spacing={2}
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        alignItems='start'
      >
        <Box sx={{ '&:hover': { cursor: 'pointer' } }} onClick={updateHandler}>
          {rowCount === 1 ? (
            <Box
              component={'div'}
              sx={styles.singleBox({ height, width, isActive })}
            >
              1
            </Box>
          ) : (
            <Box
              component={'div'}
              sx={{
                width,
              }}
            >
              <Grid container gap={'5px'}>
                {new Array(rowCount * columnCount).fill().map((_, i) => {
                  return (
                    <Grid xs={11 / columnCount}>
                      <Box sx={styles.box({ isActive })}>
                        {i + 1 === rowCount * columnCount ? i + 1 : ''}
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default Item;

const styles = {
  singleBox: ({ width, height, isActive }) => ({
    height: `${height}px`,
    width: `${width - (width * 5) / 100}px`,
    background: isActive ? '#81b1d9' : '#d1d0d0',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: isActive ? '#fff' : '#000',
  }),
  box: ({ isActive }) => ({
    borderRadius: '4px',
    background: isActive ? '#81b1d9' : '#d1d0d0',
    boxSizing: 'border-box',
    padding: '4px',
    width: '100%',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: isActive ? '#fff' : '#000',
  }),
};
