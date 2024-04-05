import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Dashboard.tsx';
import './index.css';
import Navbar from './components/Navbar.tsx';

async function deferRender() {
  const {worker} = await import('./api/mocks/browser');
  return worker.start();
}

deferRender().then(()=> {
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
})
