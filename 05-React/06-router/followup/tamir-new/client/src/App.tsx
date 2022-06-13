import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import About from "./pages/About";
import Aboutstudent from "./pages/Aboutstudent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="about" element={<About />}>
            <Route path=":userId" element={<Aboutstudent />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
