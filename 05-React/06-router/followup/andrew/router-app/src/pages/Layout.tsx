import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <h1>Routing App</h1>
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/">About</Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default Layout;