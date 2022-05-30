
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Layout from './pages/Layout';
import Vanilla from './pages/Vanilla';
import Chocolate from './pages/Chocolate'; 
import Pistachio from './pages/Pistachio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/vanilla" element={<Vanilla />}/>
          <Route path="/chocolate" element={<Chocolate />}/>
          <Route path="/pistachio" element={<Pistachio />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
