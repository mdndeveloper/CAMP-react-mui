import { ListItemIcon, Typography } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const Item = ({ text, icon, url = '', activeUrls = [], ...rest }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isActive = useMemo(() => {
    return activeUrls.includes(pathname);
  }, [activeUrls, pathname]);

  const handler = () => {
    navigate(url);
  };
  return (
    <MenuItem
      onClick={handler}
      {...rest}
      sx={{ my: '4px', bgcolor: isActive ? 'rgb(0,0,0,0.1)' : '' }}
    >
      <ListItemIcon
        sx={{
          mr: '10px',
          fontSize: '27px',
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
        <Typography sx={{ fontSize: '23px', color: '#fff' }}>{text}</Typography>
      </ListItemText>
    </MenuItem>
  );
};

export default Item;
