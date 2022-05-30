import { Outlet,Link } from "react-router-dom";


const Leyout = () => {
  return (
    <div>
       <button><Link to="/Home/About">Go To About</Link></button>
      <button><Link to="/Home">Go To Home</Link></button>
      <Outlet />
    </div>
  );
};

export default Leyout;
