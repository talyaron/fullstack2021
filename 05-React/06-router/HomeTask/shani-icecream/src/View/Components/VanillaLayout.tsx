import React from "react";
import { Link, Outlet } from "react-router-dom";

const VanillaLayout = () => {
  return (
    <div className="vanillaLayout" style={{textAlign:'center'}}>
      <h1>VanillaLayout</h1>
      <div className="vanillaLayout--types">
        <Link to="/home/vanilla/plain">Plain Vanilla</Link>
        <Link to="/home/vanilla/sprinkles">Sprinkles Vanilla</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default VanillaLayout;
