import React from 'react';
import Header from '../header/Header';
import SideBar from '../sidebar/SideBar';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        <SideBar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
