import React from 'react';
import './App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Products from './View/Pages/Products';
import Home from './View/Pages/Home';
import Navbar from './View/Components/Navbar';
import About from './View/Pages/About';
import Casual from './View/Pages/Casual';
import Periodic from './View/Pages/Periodic';
import Page404 from './View/Pages/Page404';


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />}>
          <Route path='casual' element={<Casual />} />
          <Route path='periodic' element={<Periodic />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Page404 />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
