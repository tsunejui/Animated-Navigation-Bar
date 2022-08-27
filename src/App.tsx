import React, { FC } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './containers/Layout';

const App:FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/about' element={''} />
          <Route path='/contact' element={''} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
