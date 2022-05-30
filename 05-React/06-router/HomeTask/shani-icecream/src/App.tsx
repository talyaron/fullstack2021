import React from "react";

import "./View/styles/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingPage from "./View/Pages/LoadingPage";
import HomePage from "./View/Pages/HomePage";
import Layout from "./View/Components/Layout";
import ChocoLayout from "./View/Components/ChocoLayout";
import ChocolateMilk from "./View/Components/ChocolateMilk";
import ChocolateMint from "./View/Components/ChocolateMint";
import VanillaLayout from "./View/Components/VanillaLayout";
import PlainVanilla from "./View/Components/PlainVanilla";
import SprinklesVanilla from "./View/Components/SprinklesVanilla";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoadingPage />}> </Route>
        <Route path="/home" element={<Layout/>}>
          <Route index element={<HomePage/>}></Route>
            <Route path='chocolate' element={<ChocoLayout/>}>
              <Route path='milk' element={<ChocolateMilk/>}></Route> 
              <Route path='mint' element={<ChocolateMint/>}></Route> 
            </Route>
            <Route path='vanilla' element={<VanillaLayout/>}>
              <Route path='plain' element={<PlainVanilla/>}></Route>
              <Route path='sprinkles' element={<SprinklesVanilla/>}></Route>

            </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
