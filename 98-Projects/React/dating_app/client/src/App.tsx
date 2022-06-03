import React, { useEffect } from "react";

import "./View/styles/global.scss";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";


function App() {
   
  useEffect(()=>{
    (async () => {
      const {data} = await axios.get('/api/users')
      console.log(data);
      const {users}=data
     
    })();
  },[])

  
  return (
    // <BrowserRouter>
    //   <Routes>
        
       
          
    
        
    //   </Routes>
    // </BrowserRouter>
    <div>hi</div>
  );
}

export default App;
