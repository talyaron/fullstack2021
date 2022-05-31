import { Link } from "react-router-dom";

function Chocolate() {
    return (
        <div>
            <h1>Chocolate</h1>
            <nav>
                <Link to="/home">Home</Link> |{" "}
                <Link to="/about">About</Link>
            </nav>
        </div>
    );
}

export default Chocolate;