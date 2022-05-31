import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import { useEffect } from "react"
function About() {
    const navigate = useNavigate();
    useEffect(() => {
      setTimeout(() => {
          navigate('/home')
      }, 5000);

    }, [])
    
    return (
        <div>
            <h1>About</h1>
            <nav>
                <Link to="/home">Home</Link> |{" "}
                <Link to="/about">About</Link>
            </nav>
        </div>
    );
}

export default About;