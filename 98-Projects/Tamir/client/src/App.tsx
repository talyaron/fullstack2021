import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aabout from "./Pages/Aabout";
import { useEffect } from "react";
import Navbar from "./Pages/Navbar";
import "./Style/Global.scss";
import Conect from "./Pages/Conect";

function App() {
  // useEffect(() => {
  //   axios.get("/api/users/get-user").then(({ data }) => {
  //     console.log(data);
  //   });
  // }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}>
              <Route path="about" element={<Aabout />}></Route>
              <Route path="conect" element={<Conect />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
