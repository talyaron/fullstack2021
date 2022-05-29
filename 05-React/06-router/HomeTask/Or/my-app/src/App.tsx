
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Chocolate from "./pages/Chocolate";
import Vanilla from "./pages/Vanilla";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="Chocolate" element={<Chocolate />}></Route>
          <Route path="Vanilla" element={<Vanilla />}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
