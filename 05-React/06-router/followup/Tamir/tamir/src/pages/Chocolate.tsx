// import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Chocolate = () => {
  // const navigete = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigete("/About");
  //   }, 3000);
  // }, []);
  return (
    <div>
      <h2 className="h2">chocolat</h2>
      <Outlet />
    </div>
  );
};

export default Chocolate;
