import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Leyout from "./pages/Leyout";
import "./App.css";
import axios from "axios";

function App() {
  // const [text, settext] = useState<string>('');

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await axios.get("/api/text");
  //     console.log(data);
  //     if ( data && data.text) {
  //       settext(data.text);
  //       console.log('gege');
  //     }
  //   })();

  // }, []);
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />}></Route>

        <Route path="/Main" element={<Leyout />}></Route>

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
