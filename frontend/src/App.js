import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServiceOrderDetails from './pages/ServiceOrderDetails';

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={ HomePage } />
      <Route path="/services" Component={ServiceOrderDetails} />
    </Routes>
  );
}

export default App;