import { Outlet,Link } from "react-router-dom";


const Leyout = () => {
  return (
    <div className="leyout">
      <h1>Ice Cream Shop</h1>
      <button><Link to="/Flavor">All icecream</Link></button>
      <button><Link to="/Flavor/Milk">Milk ice cream</Link></button>
      <button><Link to="/Flavor/Chocolate">Chocolate</Link></button>
      <Outlet />
    </div>
  );
};

export default Leyout;
