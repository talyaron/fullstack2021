import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Milk = () => {
  return (
    <div>
       <h2 className="h2">Milk</h2>
         <button ><Link to="/Flavor/Milk/Milkvanile">Milkvanile</Link></button>
         <button><Link to="/Flavor/Milk/MilkBanena">MilkBanena</Link></button>
      <Outlet />
    </div>
  );
};

export default Milk;
