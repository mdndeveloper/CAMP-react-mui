import { Stack } from '@mui/system';
import React from 'react';
import { useGetConfigsQuery } from '../../../../features/userConfig/userConfigApiSlice';
import { getAuthUserId } from '../../../../utils/auth';
import Card from '../../Card';
import Item from './Item';

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

const LobbyLayout = () => {
  const { data, isLoading, isError, error } = useGetConfigsQuery();

  if (isLoading || isError) return;

  if (isError) {
    console.log(error);
  }

  const config = data.find((i) => i.userId === getAuthUserId());

  return (
    <div>
      <Card title={'Lobby Layout'} color='#81b1d9'>
        <Stack direction='row' gap={4} sx={{ py: '12px' }} flexWrap='wrap'>
          {LAYOUT_ITEMS.map((i) => (
            <Item
              key={i.id}
              {...i}
              name={config?.cameraDisplay || ''}
              configId={config?.id}
            />
          ))}
        </Stack>
      </Card>
    </div>
  );
};

export default LobbyLayout;
