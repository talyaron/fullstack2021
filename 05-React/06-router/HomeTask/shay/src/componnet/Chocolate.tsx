import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import Footer from "./Footer";
function Chocolate() {
  const [moca, setMoca]=useState(true);
  const [pinut, setPinut]=useState(true)

  return (
    <div className="gradientBP">
      <header>
        <h2>Chocolate</h2>
        {/* <NavBar/> */}
        <div className="flex">
        {/* <Link className="nav" to="chocolatemoca">
        Chocolate Moca
        </Link>
        <Link className="nav" to="chocolatepinutbutter">
        Chocolate Pinutbutter
        </Link> */}
        <button onClick={()=>setMoca(!moca)}>Chocolate Moca</button>
        <button onClick={()=>setPinut(!pinut)}>Chocolate Pinutbutter</button>
        </div>
        <div className="center">
      <div className="cone"></div>
      {/* <div className="chocolate ball"></div> */}
      <div className={moca? pinut? "ball chocolate":"ball pinutbutter":"ball moca"}></div>
      </div>
      </header>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default Chocolate;
