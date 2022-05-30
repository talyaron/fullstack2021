import React from "react";

import "./View/styles/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingPage from "./View/Pages/LoadingPage";
import HomePage from "./View/Pages/HomePage";
import Layout from "./View/Components/Layout";
import Chocolate from "./View/Pages/Chocolate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoadingPage />}> </Route>
        <Route path="/home" element={<Layout/>}>
          <Route index element={<HomePage/>}></Route>
          <Route path='chocolate' element={<Chocolate/>}>
            
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
