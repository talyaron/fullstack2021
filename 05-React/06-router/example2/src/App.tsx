import React from "react";

import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./Layout";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      {/* the navigation system / the conditiona rendering of routes */}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
