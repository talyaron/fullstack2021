import { Link, Outlet } from "react-router-dom";
import './App.css'
function Layout() {
  return (
    <div className="layout">
      <header className="menuHeader">

        <Link  className="menu" to="/from-mentee">From Mentee</Link><Link className="menu"to="/answered">Answered</Link><Link className="menu"to="/pending">Pending</Link>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;
