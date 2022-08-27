import React, { FC } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './containers/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

const App:FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
