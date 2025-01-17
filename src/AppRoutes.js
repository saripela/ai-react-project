import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="*" element={<DashboardPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;