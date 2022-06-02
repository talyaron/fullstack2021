import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './componnets/Main';
import IceCream from './componnets/IceCream';
import Layout from './componnets/Layout';
import Vanilla from './componnets/Vanilla';
import Chocolate from './componnets/Chocolate';
function App() {
  // const [text, setText]=useState<string>('')

  useEffect(()=>{
    (async () => {
      const { data } = await axios.get('/api/iceCreamData')
      console.log(data);
    
     
    })();

  // fetch('/api/text').then(r=>r.json()).then(res=>{console.log(res)});
  
  },[])

  return (
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Layout/>}>
       <Route index element={<Main />}></Route>
        <Route path=":IceCreamId" element={<IceCream/>}/>
        <Route path="/chocolate" element={<Chocolate/>}>Chocolate</Route>
        <Route path="/vanilla" element={<Vanilla/>}>Vanilla</Route>
        <Route path="/chocolate/:IceCreamId" element={<IceCream/>}>Chocolate</Route>
        <Route path="/vanilla/:IceCreamId" element={<IceCream/>}>Vanilla</Route>
     </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
