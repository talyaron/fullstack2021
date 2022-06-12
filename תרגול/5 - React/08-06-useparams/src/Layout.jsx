import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer>
        <Link to="/">Home</Link>
      </footer>
    </div>
  );
};

export default Layout;
