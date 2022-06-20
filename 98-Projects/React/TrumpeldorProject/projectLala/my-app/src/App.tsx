import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import './App.scss';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="orders" element={<Orders />} />
        
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
