import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <h1>Choose a flavor</h1>
            <nav>
                <Link className="link" to="/pistachio">Pistachio</Link> |
                <Link className="link" to="/vanilla">Vanilla</Link>
            </nav>
        </div>
    );
}

export default Home;