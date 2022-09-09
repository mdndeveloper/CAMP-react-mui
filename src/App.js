import { Box } from '@mui/material';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminLayout from './components/admin/AdminLayout';
import Layout from './components/layout/Layout';
import DefaultImages from './pages/admin/DefaultImages';
import DefaultMessages from './pages/admin/DefaultMessages';
import Locations from './pages/admin/Locations';
import AllCameraList from './pages/AllCameraList';
import Displays from './pages/confugure/Dispalays';
import Marketplace from './pages/confugure/Marketplace';
import MessagesSounds from './pages/confugure/MessagesSounds';
import SliderShow from './pages/confugure/SliderShow';
import Streams from './pages/confugure/Streams';
import Login from './pages/Login';
import Messages from './pages/Messages';
import Schedule from './pages/Schedule';
import SingleCamera from './pages/SingleCamera';

const App = () => {
  return (
    <Box sx={{ height: '100vh', overflow: 'auto' }}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />j
            <Route path='/messages' element={<Messages />} />
            <Route path='/schedule' element={<Schedule />} />
            <Route path='/configure' element={<ConfigureRedirect />} />
            <Route
              path='/configure/messages-sounds'
              element={<MessagesSounds />}
            />
            <Route path='/configure/slide-show' element={<SliderShow />} />
            <Route path='/configure/streams' element={<Streams />} />
            <Route path='/configure/marketplace' element={<Marketplace />} />
            <Route path='/configure/displays' element={<Displays />} />
            <Route path='/admin' element={<AdminLayout />} />
            <Route path='/admin/locations' element={<Locations />} />
            <Route
              path='/admin/default-messages'
              element={<DefaultMessages />}
            />
            <Route path='/admin/default-images' element={<DefaultImages />} />
            <Route path='/cameras' element={<AllCameraList />} />
            <Route path='/camera' element={<SingleCamera />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Box>
  );
};

const ConfigureRedirect = () => {
  return <Navigate to={'/configure/messages-sounds'} />;
};

export default App;
