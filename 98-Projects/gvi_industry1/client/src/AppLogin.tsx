import React from "react";
import "./styles/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
          <Route path='/' element={<HomePage />} />
          
          <Route/>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
