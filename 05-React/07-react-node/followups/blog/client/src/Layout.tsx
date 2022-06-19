import { Link, Outlet } from "react-router-dom";
import "./App.css";
function Layout() {
  return (
    <div className="Layout">
      <header>
        <h1>My app</h1>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/articles-list">ArticlesList</Link>
        <Link to="/article:name">Article</Link>
      </header>
      <Outlet />
      <footer>React app</footer>
    </div>
  );
}

export default Layout;
