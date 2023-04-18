import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServiceOrderDetails from './pages/ServiceOrderDetails';
import FinishedSale from './pages/FinishedSale';

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={ HomePage } />
      <Route path="/services/:id" Component={ServiceOrderDetails} />
      <Route path="/finished/:id" Component={FinishedSale} />
    </Routes>
  );
}

export default App;