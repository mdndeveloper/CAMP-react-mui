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
      <ListItemIcon
        sx={{
          mr: '10px',
          fontSize: { xs: '33px', sm: '30', md: '29px' },
          color: '#fff',
        }}
      >
        {icon}
      </ListItemIcon>
      <ListItemText
        sx={{
          display: {
            xs: 'none',
            md: 'block',
          },
        }}
      >
        <Typography sx={{ fontSize: '25px', color: '#fff' }}>{text}</Typography>
      </ListItemText>
    </MenuItem>
  );
};

export default Item;
