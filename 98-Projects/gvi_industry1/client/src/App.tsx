import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./view/pages/matching/Navbar";
import Main from "./view/pages/main/Main";
import "./App.css";
import Matching from "./view/pages/matching/Matching";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        {/* <Route path="/" element={<Login />}></Route> */}
          <Route path="/navbar" element={<Navbar />}>
          <Route path="/navbar/main" element={<Main />}></Route> 
          <Route path="/navbar/matching" element={<Matching />}></Route> 
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
