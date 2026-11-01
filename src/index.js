import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './Layout';
import Home from './pages/home/Home';
import Performance from './pages/performance/Performance';
import About from './pages/about/About';
import Garage from './pages/garage/Garage';
import { CarProvider } from './context/CarContext';

const App = () => {
  return (
    <CarProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="performance" element={<Performance />} />
            <Route path="about" element={<About />} />
            <Route path="garage" element={<Garage />} />
          </Route>
        </Routes>
      </HashRouter>
    </CarProvider>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);