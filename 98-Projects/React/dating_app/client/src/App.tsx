import React, { useEffect } from "react";

import "./View/styles/global.scss";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import LogoBar from './View/Pages/LogoBar';
import Login from './View/Components/Login';
import NavBar from './View/Pages/NavBar';
import Home from './View/Pages/Home';
import Profile from "./View/Components/Profile";

function App() {
   
  useEffect(()=>{
    (async () => {
      const {data} = await axios.get('/api/users')
      const {users}=data
      console.log(users)
     
    })();
  },[])

  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LogoBar/>}>
        <Route index  element={<Login/>}></Route>  
        <Route path="/navBar/:id" element={<NavBar />}>
          <Route index element={<Home />}></Route>
          <Route path='/navBar/:id/:profilesId'  element={<Profile/>}></Route>  
          </Route>      
       
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
