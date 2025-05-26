import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';

// Layout
import Layout from './components/layout/Layout';

// Pages
import Dashboard from './pages/Dashboard';
import Ticketing from './pages/Ticketing';
import FleetManagement from './pages/FleetManagement';
import PassengerInfo from './pages/PassengerInfo';
import Analytics from './pages/Analytics';
import Security from './pages/Security';
import Settings from './pages/Settings';
import Login from './pages/Login';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="ticketing" element={<Ticketing />} />
            <Route path="fleet" element={<FleetManagement />} />
            <Route path="passengers" element={<PassengerInfo />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="security" element={<Security />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;