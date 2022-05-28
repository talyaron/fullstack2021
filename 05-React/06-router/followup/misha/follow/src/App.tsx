import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

//Pages
import Home from './view/pages/Home'
import Products from './view/pages/Products';
import Casual from './view/pages/Casual'
import Periodical from './view/pages/Periodical';
import ErrorPage from './view/pages/ErrorPage'

function App() {
  return (
    <Router>

      <nav>
        <Link to="/"> Home</Link>
        <Link to="/Products">Products</Link>
      </nav>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/Products' element={<Products />}>
          <Route path="/Periodical" element={<Periodical />} />
          <Route path="/Casual" element={<Casual />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />

      </Routes>

      <div>Footer</div>

    </Router>
  );
}

export default App;
