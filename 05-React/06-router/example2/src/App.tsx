import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Home from "./pages/Home";
import About from "./pages/About";
import LayoutComp from "./Layout";

function App() {
  return (
    <BrowserRouter>
      {/* the navigation system / the conditiona rendering of routes */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
