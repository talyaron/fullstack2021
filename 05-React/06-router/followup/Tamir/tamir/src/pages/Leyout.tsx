import { Outlet,Link } from "react-router-dom";


const Leyout = () => {
  return (
    <div className="leyout">
      <h1 className="leyout__h1">Ice Cream Shop</h1>
      <button className="leyout__b"><Link to="/Flavor" className="leyout__link">Home Page</Link></button>
      <button className="leyout__b"><Link to="/Flavor/Milk" className="leyout__link">Milk ice cream</Link></button>
      <button className="leyout__b"><Link to="/Flavor/Chocolate" className="leyout__link">Chocolate</Link></button>
      <Outlet />
    </div>
  );
};

export default Leyout;
