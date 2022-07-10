import React from "react";

import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Home from "./pages/Home";
import FromMentee from './pages/FromMentee';
import Answered from './pages/Answered';

import Layout from "./Layout";
import Pending from "./pages/Pending";

function App() {
  return (
    
    <BrowserRouter>
      {/* the navigation system / the conditiona rendering of routes */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="from-mentee" element={<FromMentee />}></Route>
          <Route path="answered" element={<Answered />}></Route>
          <Route path="pending" element={<Pending />}></Route>


        </Route>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
