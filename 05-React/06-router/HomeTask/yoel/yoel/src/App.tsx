import React from 'react';
import logo from './logo.svg';
import './view/style/global.scss'
import Cream from './view/pages/Cream';
import Vanilla from './view/components/Vanilla';
import Cochlate from './view/components/Chcolate'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cream />}>
          <Route path=':userName'/>
          <Route path="/vanilla" element={<Vanilla />}> </Route>
          <Route path="/chocolate" element={<Cochlate />}> </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
