import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './view/components/Login';
import Register from './view/components/Register';
import Home from './view/page/Home';
import Nav from './view/components/Nav';
import './view/style/global.scss';

import Something from './view/components/Something';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav/>}>
          <Route index element={<Home />} />
          <Route path='/api/register' element={<Register />} />
          <Route path='/api/login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
