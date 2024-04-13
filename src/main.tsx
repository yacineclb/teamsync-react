import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

import './index.css';
import Sidebar from './components/Sidebar';
import NoMatch from './pages/NoMatch';
import Home from './pages/Home';

async function deferRender() {
  const { worker } = await import('./api/mocks/browser');
  return worker.start();
}

deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <div className="flex h-full">
                <Sidebar />
                <Dashboard />
              </div>
            }
          />
          <Route
            path="/login"
            element={
              <div className="flex h-full">
                <Login />
              </div>
            }
          />
          <Route
            path="/signup"
            element={
              <div className="flex h-full">
                <Register />
              </div>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
  );
});
