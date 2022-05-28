import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import Home from "./Components/Home";
import ChocolateLayout from "./Components/Layouts/ChocolateLayout";
import VanillaLayout from "./Components/Layouts/VanillaLayout";
import StrawberryLayout from "./Components/Layouts/StrawberryLayout"
import Chocolate from "./Components/Flavours/Chocolate";
import ChocolateBanana from './Components/Flavours/ChocolateBanana';
import Vanilla from "./Components/Flavours/Vanilla";
import VanillaLime from "./Components/Flavours/VanillaLime";
import VanillaStrawberry from "./Components/Flavours/VanillaStrawberry"
import Strawberry from "./Components/Flavours/Strawberry"
import StrawberryBanana from "./Components/Flavours/StrawberryBanana";

import "./App.css";


function App() {
  const vanillaChildren =["Lime", 'Banana']
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/Vanilla"}>Vanilla</Link>
            </li>
            <li>
              <Link to={"/Chocolate"}>Chocolate</Link>
            </li>
            <li>
              <Link to={"/Strawberry"}>Strawberry</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Chocolate" element={<ChocolateLayout />}>
              <Route index element={<Chocolate />} />
              <Route path='Banana' element={<ChocolateBanana />} />
            </Route>
            <Route path="/Vanilla" element={<VanillaLayout childrenList={vanillaChildren}   />}>
              <Route index element={<Vanilla />} />
              <Route path='Lime' element={<VanillaLime />} />
              <Route path='Strawberry' element={<VanillaStrawberry />} />
            </Route>
            <Route path="/Strawberry" element={<StrawberryLayout />}>
              <Route index element={<Strawberry />} />
              <Route path='Banana' element={<StrawberryBanana />} />
            </Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
