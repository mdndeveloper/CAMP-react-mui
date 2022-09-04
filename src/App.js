import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import MessagesSounds from './pages/confugure/MessagesSounds';
import Messages from './pages/Messages';
import Schedule from './pages/Schedule';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<h2>Home</h2>} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/configure' element={<ConfigureRedirect />} />
          <Route
            path='/configure/messages-sounds'
            element={<MessagesSounds />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

const ConfigureRedirect = () => {
  return <Navigate to={'/configure/messages-sounds'} />;
};

export default App;
