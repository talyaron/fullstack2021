import "./App.css";
import Milk from "./pages/Milk";
import Login from "./pages/Login";
import Leyout from "./pages/Leyout";
import Chocolate from "./pages/Chocolate";
import Flavor from "./pages/Flavor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chocolatevanile from "./pages/Chocolatevanile";
import ChocolateFlavor from "./pages/ChocolateFlavor";
import ChocolateBanena from "./pages/ChocolateBanena";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>

        <Route path="/Flavor" element={<Leyout />}>
          <Route index element={<Flavor />}></Route>

          <Route path="Chocolate" element={<Chocolate />}>
            <Route index element={<ChocolateFlavor />}></Route>
            <Route path="Chocolatevanile" element={<Chocolatevanile />}></Route>
            <Route path="ChocolateBanena" element={<ChocolateBanena />}></Route>
          </Route>

          <Route path="Milk" element={<Milk />}>
            
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
