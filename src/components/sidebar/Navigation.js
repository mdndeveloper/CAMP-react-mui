import { Box } from '@mui/material';
import MenuList from '@mui/material/MenuList';
import React from 'react';
import { FaBookOpen, FaRegBell, FaRegCalendarAlt } from 'react-icons/fa';
import Item from './Item';

const configureUrl = [
  '/configure/messages-sounds',
  '/configure/slide-show',
  '/configure/streams',
  '/configure/marketplace',
  '/configure/displays',
];

function Navigation() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
      }}
    >
      <MenuList>
        <Item
          url='/messages'
          text={'Messages'}
          icon={<FaRegBell />}
          activeUrls={['/messages']}
        />
        <Item
          url='/schedule'
          text={'Schedule'}
          icon={<FaRegCalendarAlt />}
          activeUrls={['/schedule']}
        />
        <Item
          url='/configure'
          text={'Configure'}
          icon={<FaBookOpen />}
          activeUrls={configureUrl}
        />
      </MenuList>
    </Box>
  );
}

export default Navigation;
