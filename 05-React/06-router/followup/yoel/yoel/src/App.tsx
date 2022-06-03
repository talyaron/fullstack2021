import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route ,} from "react-router-dom";
import Home from './pages/Home';
import Work from './pages/Work';
import './style/global.scss'

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path = '/' element={<Home/>} ></Route>
        <Route path = '/work' element = {<Work/>}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
