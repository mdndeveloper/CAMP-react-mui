import { Stack } from '@mui/system';
import React from 'react';
import Card from '../../Card';
import Item from './Item';

const LAYOUT_ITEMS = [
  {
    id: 1,
    columnCount: 1,
    rowCount: 1,
  },
  {
    id: 5,
    columnCount: 3,
    rowCount: 2,
  },

  {
    id: 2,
    columnCount: 3,
    rowCount: 3,
  },

  {
    id: 3,
    columnCount: 4,
    rowCount: 3,
  },
  {
    id: 4,
    columnCount: 4,
    rowCount: 4,
  },
];

const LobbyLayout = () => {
  return (
    <div>
      <Card title={'Lobby Layout'} color='#81b1d9'>
        <Stack direction='row' gap={4} sx={{ py: '12px' }} flexWrap='wrap'>
          {LAYOUT_ITEMS.map((i) => (
            <Item key={i.id} {...i} />
          ))}
        </Stack>
      </Card>
    </div>
  );
};

export default LobbyLayout;
