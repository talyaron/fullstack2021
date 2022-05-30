import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <nav>
                <Link to="/vanilla">vanilla</Link> |{" "}
                <Link to="/vanilla">Chocolate</Link> |{" "}
                <Link to="/pistachio">Pistachio</Link>
            </nav>
        </div>
    );
}

export default Home;