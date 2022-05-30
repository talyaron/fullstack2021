
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './main-pages/Layout';
import Home from './main-pages/Home';
import Chocolate from "./main-pages/Chocolate";
import Vanilla from "./main-pages/Vanilla";
import ChocolateLayout from "./subPages/ChocolateLayout";
import Mokka from "./subPages/Mokka";
import ChocolateSprinkles from "./subPages/ChocolateSprinkles";
import VanillaLayout from "./subPages/VanillaLayout";
import VanillaChip from "./subPages/VanillaChip";
import FrenchVanilla from "./subPages/FrenchVanilla";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="Chocolate" element={<ChocolateLayout />}>
            <Route index element={<Chocolate />}></Route>
            <Route path="mokka" element={<Mokka />}></Route>
            <Route path="sprinkles" element={<ChocolateSprinkles />}></Route>
          </Route>
          <Route path="Vanilla" element={<VanillaLayout />}>
            <Route index element={<Vanilla />}></Route>
            <Route path="French-Vanilla" element={<FrenchVanilla />}></Route>
            <Route path="Chip" element={<VanillaChip />}></Route>
          </Route>
        </Route>

    </Routes>
    </BrowserRouter >
  );
}

export default App;
