import { Link, Outlet } from "react-router-dom";
const Chocolate = () => {
  return (
    <div>
      <h2 className="h2">chocolat</h2>
         <button ><Link to="/Flavor/Chocolate/Chocolatevanile">Chocolatevanile</Link></button>
         <button><Link to="/Flavor/Chocolate/ChocolateBanena">ChocolateBanena</Link></button>
      <Outlet />
    </div>
  );
};

export default Chocolate;
