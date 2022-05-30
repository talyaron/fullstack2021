import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Leyout from "./pages/Leyout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Home" element={<Leyout />}> 
         <Route index element={<Home />}></Route>
         <Route path="About" element={<About />}> </Route>
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
