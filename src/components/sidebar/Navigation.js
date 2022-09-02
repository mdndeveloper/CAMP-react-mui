import { Box } from '@mui/material';
import MenuList from '@mui/material/MenuList';
import React from 'react';
import {
  FaBookOpen,
  FaHome,
  FaRegBell,
  FaRegCalendarAlt,
} from 'react-icons/fa';
import Item from './Item';

function Navigation() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
      }}
    >
      <MenuList>
        <Item url='/' text={'Home'} icon={<FaHome />} />
        <Item url='/messages' text={'Messages'} icon={<FaRegBell />} />
        <Item url='/schedule' text={'Schedule'} icon={<FaRegCalendarAlt />} />
        <Item url='/configure' text={'Configure'} icon={<FaBookOpen />} />
      </MenuList>
    </Box>
  );
}

export default Navigation;
