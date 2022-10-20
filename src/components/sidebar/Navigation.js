import { Box } from '@mui/material';
import MenuList from '@mui/material/MenuList';
import React from 'react';
import {
  FaBookOpen,
  FaCamera,
  FaCameraRetro,
  FaRegBell,
  FaRegCalendarAlt,
} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Item from './Item';

const configureUrl = [
  '/configure/messages-sounds',
  '/configure/slide-show',
  '/configure/streams',
  '/configure/marketplace',
  '/configure/displays',
];

function Navigation() {
  const { is_admin } = useSelector((state) => state?.auth?.user);
  const { isProxy } = useSelector((state) => state?.auth?.proxy);
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
        {(!is_admin || isProxy) && (
          <>
            <Item
              onClick={() => {
                window.open('/back-display');
              }}
              text={'Back Display'}
              icon={<FaCameraRetro />}
            />
            <Item
              onClick={() => {
                window.open('/cameras');
              }}
              text={'Lobby Display'}
              icon={<FaCamera />}
            />
          </>
        )}
      </MenuList>
    </Box>
  );
}

export default Navigation;
