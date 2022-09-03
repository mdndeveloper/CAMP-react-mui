import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import Messages from './pages/Messages';
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<h2>Home</h2>} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/schedule' element={<h2>Schedule</h2>} />
          <Route path='/configure' element={<h2>Configure</h2>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
