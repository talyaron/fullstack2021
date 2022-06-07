import React from 'react';
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import './App.scss';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
    <Routes>
        <Route path='/' element={<Main/>} />
        
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
