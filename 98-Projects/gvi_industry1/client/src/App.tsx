import React from "react";
import "./view/Styles/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './view/Components/HomePage'

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
