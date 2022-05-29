import { useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

function ChocolateLayout() {
  const location = useLocation();
  useEffect(() => {
    console.dir(location);
  }, []);
  return (
    <div>
      <p>
        {" "}
        <Link to={'/Chocolate'}>Chocolate</Link> {`{>}`}{" "}
        <Link to={'Banana'}>Chocolate banana</Link>
      </p>
      <Outlet />
    </div>
  );
}

export default ChocolateLayout;
