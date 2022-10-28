import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import React, { useMemo } from 'react';
import {
  useGetConfigsQuery,
  useUpdateConfigMutation,
} from '../../../../features/userConfig/userConfigApiSlice';

const LayoutOne = () => {
  const {
    data: config,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetConfigsQuery();

  const [updateConfig] = useUpdateConfigMutation();

  const isActive = useMemo(() => {
    if (!isSuccess) return false;
    return config[0].slideShowPosition === 'NONE';
  }, [isSuccess, config]);

  if (isLoading || isError) return;

  if (isError) {
    console.log(error);
  }

  if (!isSuccess) return null;

  const updateHandler = () => {
    updateConfig({ id: config[0].id, data: { slideShowPosition: 'NONE' } });
  };

  return (
    <Stack
      gap={1}
      alignItems='center'
      sx={{
        height: `180px`,
        width: `250px`,
        background: '#f1f1f1',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
      onClick={updateHandler}
    >
      <Box
        sx={{
          height: `100%`,
          width: `100%`,
          color: isActive ? '#fff' : '#000',
          background: isActive ? '#81b1d9' : 'transparent',
          border: isActive ? 'none' : '1px solid #81b1d9',
          borderRadius: '4px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Cameras
      </Box>
    </Stack>
  );
};

export default LayoutOne;
