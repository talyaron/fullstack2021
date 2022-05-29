import React from "react";
import { Outlet, Link } from "react-router-dom";

function StrawberryLayout() {
  return (
    <div>
      <Link to={'/Strawberry'}>Strawberry</Link>
      <Link to={'Banana'}>Banana</Link>
      <Outlet />
    </div>
  );
}

export default StrawberryLayout;
