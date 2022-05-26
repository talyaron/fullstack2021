import React from 'react';
import './App.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="./" element={<About />}>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
