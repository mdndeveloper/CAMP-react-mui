import { Box, Grid, Stack } from '@mui/material';
import React from 'react';

const Item = (props) => {
  const { rowCount = 1, columnCount = 1 } = props;
  const height = 130 + 50;
  const width = 150 + 50;

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
        <Box>
          {rowCount === 1 ? (
            <Box component={'div'} sx={styles.singleBox({ height, width })}>
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
                      <Box sx={styles.box}>
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
  singleBox: ({ width, height }) => ({
    height: `${height}px`,
    width: `${width - (width * 5) / 100}px`,
    background: '#81b1d9',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  }),
  box: {
    borderRadius: '4px',
    bgcolor: '#81b1d9',
    boxSizing: 'border-box',
    padding: '4px',
    width: '100%',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
};
