import { Box, ListItemIcon, Typography } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import React from 'react';
import { FaAngleRight, FaRegQuestionCircle, FaUserAlt } from 'react-icons/fa';

function UserMenu() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
      }}
    >
      <MenuList>
        <Item text={'Admin'} icon={<FaUserAlt />} />
        <Item text={'Help Center'} icon={<FaRegQuestionCircle />} />
        <Item text={'Log Out'} icon={<FaAngleRight />} />
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

export default UserMenu;
