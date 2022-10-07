import { Box } from '@mui/material';
import React from 'react';
import useInnerSize from '../../hooks/useInnerSize';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
const SideBar = ({ elementHeight }) => {
  const { height } = useInnerSize();
  return (
    <Box
      sx={{
        pt: '20px',
        background: '#557993',
        height: height - 90,

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
      }}
    >
      <div>
        <Navigation />
      </div>
      <div>
        <UserMenu />
      </div>
    </Box>
  );
};

export default SideBar;
