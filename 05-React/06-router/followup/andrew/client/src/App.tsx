import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './view/style/global.scss'

import Navbar from "./view/components/Navbar";
import Home from "./view/pages/Home";
import Pistachio from './view/pages/Pistachio'
import Vanilla from "./view/pages/Vanilla";
import IceCreamPage from "./view/pages/IceCreamPage";

function App() {
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/text')
      console.log(data);
    })();
  }, [])


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />}></Route>
          <Route path="vanilla" element={<Vanilla />}>
            <Route path=':iceCreamId' element={<IceCreamPage />} />
          </Route>
          <Route path="pistachio" element={<Pistachio />}>
            <Route path=':iceCreamId' element={<IceCreamPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
