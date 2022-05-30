import React,{useState} from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
function Vanilla() {
  const [lemon, setLemon]=useState(true);
  const [blue, setBlue]=useState(true)
  return (
    <div className="gradientBP">
      <header>
        <h2>Vanilla</h2>
     
        <div className="flex">
  
         <button onClick={()=>setLemon(!lemon)}>Vanilla Lemon</button>
        <button onClick={()=>setBlue(!blue)}>Vanilla Blueberry</button>
        </div>
        <div className="center">
          <div className="cone"></div>
          <div className={lemon? blue? "ball vanilla":"ball blue":"ball lemon"}></div>
        </div>
      </header>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default Vanilla;
