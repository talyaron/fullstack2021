import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Style/Global.scss";
import Login from "./pages/Login";
import Milk from "./pages/Milk/Milk";
import Leyout from "./pages/Leyout";
import Flavor from "./pages/Flavor";
import Chocolate from "./pages/Chocolate/Chocolate";
import Milkvanile from "./pages/Milk/Milkvanile"
import MilkBanena from "./pages/Milk/MilkBanena";
import Chocolatevanile from "./pages/Chocolate/Chocolatevanile";
import ChocolateBanena from "./pages/Chocolate/ChocolateBanena";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>

        <Route path="/Flavor" element={<Leyout />}>

          <Route index element={<Flavor />}></Route> 

          <Route path="Chocolate" element={<Chocolate />}>
            <Route path="Chocolatevanile" element={<Chocolatevanile />}></Route>
            <Route path="ChocolateBanena" element={<ChocolateBanena />}></Route>
          </Route>

          <Route path="Milk" element={<Milk />}>
            <Route path="Milkvanile" element={<Milkvanile />}></Route>
            <Route path="MilkBanena" element={<MilkBanena />}></Route>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
