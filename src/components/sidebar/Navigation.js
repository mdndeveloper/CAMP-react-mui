import { Box, ListItemIcon, Typography } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import React from 'react';
import {
  FaBookOpen,
  FaHome,
  FaRegBell,
  FaRegCalendarAlt,
} from 'react-icons/fa';

function Navigation() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
      }}
    >
      <MenuList>
        <Item text={'Home'} icon={<FaHome />} />
        <Item text={'Messages'} icon={<FaRegBell />} />
        <Item text={'Schedule'} icon={<FaRegCalendarAlt />} />
        <Item text={'Configure'} icon={<FaBookOpen />} />
      </MenuList>
    </Box>
  );
}

const Item = ({ text, icon }) => {
  return (
    <MenuItem>
      <ListItemIcon sx={{ mr: '10px', fontSize: '27px', color: '#fff' }}>
        {icon}
      </ListItemIcon>
      <ListItemText>
        <Typography sx={{ fontSize: '22px', color: '#fff' }}>{text}</Typography>
      </ListItemText>
    </MenuItem>
  );
};

export default Navigation;
