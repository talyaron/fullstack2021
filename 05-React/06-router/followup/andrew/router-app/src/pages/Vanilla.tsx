import { Link } from "react-router-dom";

function Vanilla() {
    return (
        <div>
            <h1>Vanilla</h1>
            <nav>
                <Link to="/home">Home</Link> |{" "}
                <Link to="/about">About</Link>
            </nav>
        </div>
    );
}

export default Vanilla;