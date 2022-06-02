import './App.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from './Main';
import IceCream from './Views/Components/IceCream';
import Home from './Views/Pages/Home';
import Login from './Views/Pages/Login'

function App() {

  const [icecream, setIcecream] = useState("")







  return (
    <div className="App">
      <header className="App-header">

        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Login />}></Route>

          
            <Route path="/home" element={<Main icecream={icecream} setIcecream={setIcecream} />}>
              <Route index element={<Home />}></Route>
              <Route path=":iceCreamId" element={<IceCream icecream={icecream} setIcecream={setIcecream} />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
