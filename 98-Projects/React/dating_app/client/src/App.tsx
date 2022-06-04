import React, { useEffect } from "react";

import "./View/styles/profile.scss";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Profile from './View/componnent/Profile'

function App() {
   
  useEffect(()=>{
    (async () => {
      const {data} = await axios.get('/api/users')
      console.log(data);
      const {users}=data
     
    })();
  },[])

  
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={</>}>
        <Route index  element={Login}></Route>  
        <Route path="/" element={</>}>
        <Route path='/'  element={Home}></Route>   */}
        <Route path='/api/:profilesId'  element={<Profile/>}></Route>  
          {/* </Route>     
       
  </Route> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
