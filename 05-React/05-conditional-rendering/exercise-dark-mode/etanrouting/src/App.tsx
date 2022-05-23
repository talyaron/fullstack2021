import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
<Router>
  <Routes>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
  </Routes>
</Router>
  );
}

export default App;
