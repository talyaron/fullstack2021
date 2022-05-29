import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/David");
    }, 3000);
  }, []);

  return (
    <div>
      <p> home</p>
      <Link to="/David"> hello </Link>
    </div>
  );
};

export default Home;
