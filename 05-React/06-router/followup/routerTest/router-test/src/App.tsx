import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './View/Pages/Home'
import David from './View/Pages/David'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/David" element={<David />} />

    </Routes>
    
  </BrowserRouter>
  );
}

export default App;
