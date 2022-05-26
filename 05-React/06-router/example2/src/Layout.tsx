import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <header>
        <h1>My app</h1>
        <Link to="/home">Home</Link> <Link to="/home/about">About</Link>
      </header>
      <Outlet />
      <footer>React app</footer>
    </div>
  );
}

export default Layout;
