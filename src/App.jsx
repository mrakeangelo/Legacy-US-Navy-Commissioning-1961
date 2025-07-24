import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminDashboard from './pages/AdminDashboard';
import { SupabaseProvider } from './contexts/SupabaseContext';
import './App.css';

function App() {
  return (
    <SupabaseProvider>
      <Router>
        <div className="min-h-screen bg-navy-blue">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </div>
      </Router>
    </SupabaseProvider>
  );
}

export default App;