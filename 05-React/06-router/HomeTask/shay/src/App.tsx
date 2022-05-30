import React, { useState } from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componnet/Home";
import Chocolate from "./componnet/Chocolate";
import Vanilla from "./componnet/Vanilla"

// import Login from "./componnet/Login";
function App() {
  const [showOne, setShowOne] = useState(true);

 
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}>
        <Route index element={<Chocolate />}></Route>
        <Route path="/vanilla" element={<Vanilla />}>  </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    );
 
  
  }


export default App;
