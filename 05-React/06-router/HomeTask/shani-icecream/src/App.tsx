import React from "react";


import "./View/styles/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingPage from './View/Pages/LoadingPage'
import HomePage from './View/Pages/HomePage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoadingPage />}> </Route>
      <Route path="/home" element={<HomePage />}> </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
