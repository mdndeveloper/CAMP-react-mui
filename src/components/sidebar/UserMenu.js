import { Box } from '@mui/material';
import MenuList from '@mui/material/MenuList';
import React from 'react';
import { FaAngleRight, FaRegQuestionCircle, FaUserAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/login/authSlice';
import { removeToken } from '../../utils/token';
import Item from './Item';

function UserMenu() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    removeToken();
    dispatch(logout());
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
      }}
    >
      <MenuList>
        <Item url='/admin' text={'Admin'} icon={<FaUserAlt />} />
        <Item
          url='/help-center'
          text={'Help Center'}
          icon={<FaRegQuestionCircle />}
        />
        <Item
          onClick={logoutHandler}
          text={'Log Out'}
          icon={<FaAngleRight />}
        />
      </MenuList>
    </Box>
  );
}

export default UserMenu;
