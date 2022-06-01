import React, { useEffect } from "react";

import "./View/styles/global.scss";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Layout from "./View/Pages/Layout";
import IceCream from "./View/Components/IceCream";
import Chocolate from "./View/Components/Chocolate";
import Vanilla from "./View/Components/Vanilla";
import GoofyGoober from "./View/Components/GoofyGoober";
import Home from "./View/Components/Home";

function App() {
  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios.get("/getIceCreams");
  //     console.log(data);
      
  //   })();
  // },[]);
  
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          {/* <Route path=":icecreamId" element={<IceCream/>}/> */}
          <Route index element={<Home/>}/>
          <Route path="chocolate" element={<Chocolate/>}/>
          <Route path="vanilla" element={<Vanilla/>}/>
          <Route path="goofygoober" element={<GoofyGoober/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
