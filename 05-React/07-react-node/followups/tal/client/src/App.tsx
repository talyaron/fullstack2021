import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import IceCream from "./view/pages/IceCream";
import Main from "./Main";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path=":icecreamId" element={<IceCream />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
