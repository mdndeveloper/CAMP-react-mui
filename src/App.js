import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import Schedule from './pages/Schedule';
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<h2>Home</h2>} />
          <Route path='/messages' element={<h2>Messages</h2>} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/configure' element={<h2>Configure</h2>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
