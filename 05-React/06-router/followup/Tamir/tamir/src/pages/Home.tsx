import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const navigete = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigete("/About");
    }, 3000);
  }, []);
  return (
    <div>
      <button>Home</button>
      <Link to="/About">About</Link>
    </div>
  );
};

export default Home;
