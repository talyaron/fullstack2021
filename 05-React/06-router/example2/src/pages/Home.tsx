import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

//   useEffect(() => {
//     setTimeout(() => {
//       navigate("/about");
//     }, 3000);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

  return (
    <div className="subpage green">
      <h2>Home</h2>
      <Link to="/about">About</Link>
      <Link to='/'>Login</Link>
    </div>
  );
};

export default Home;
