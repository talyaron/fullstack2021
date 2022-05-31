import { Link } from "react-router-dom";

function Pistachio() {
    return (
        <div>
            <h1>Pistachio</h1>
            <nav>
                <Link to="/home">Home</Link> |{" "}
                <Link to="/pistachio">About</Link>
            </nav>
        </div>
    );
}

export default Pistachio;