import { useEffect,useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './view/pages/Layout';
import Home from './view/pages/Home';

function App() {
  // const [hello,setHello] = useState('')

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios.get('/api')
  //    setHello(data.text)
  //   })()

  // }, [])

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
        </Route>

    </Routes>
    </BrowserRouter >
  );
}

export default App;
