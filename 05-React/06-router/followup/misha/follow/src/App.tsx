import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './view/pages/About'
import Home from './view/pages/Home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
