import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomeSatrt from "./pages/HomeStart";
import Orders from "./pages/Orders";
import './App.scss';
import MapPage from "./pages/MapPage";



function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeSatrt />} />
        


        
      </Route>
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
