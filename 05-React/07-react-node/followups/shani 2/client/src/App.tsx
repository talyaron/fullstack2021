import React, { useEffect } from "react";

import "./View/styles/global.scss";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Layout from "./View/Pages/Layout";
import IceCream from "./View/Components/IceCream";

function App() {
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/getIceCreams");
      console.log(data);
     
    })();
  });
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Layout />}>
          <Route path=":icecreamId" element={<IceCream />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
