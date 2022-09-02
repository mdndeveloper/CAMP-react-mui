import { ListItemIcon, Typography } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const Item = ({ text, icon, url = '', ...rest }) => {
  const navigate = useNavigate();
  const handler = () => {
    navigate(url);
  };
  return (
    <MenuItem onClick={handler} {...rest}>
      <ListItemIcon sx={{ mr: '10px', fontSize: '27px', color: '#fff' }}>
        {icon}
      </ListItemIcon>
      <ListItemText>
        <Typography sx={{ fontSize: '22px', color: '#fff' }}>{text}</Typography>
      </ListItemText>
    </MenuItem>
  );
};

export default Item;
