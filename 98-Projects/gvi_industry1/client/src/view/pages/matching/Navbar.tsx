import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
const Navbar = () => {
  function handleclick() {
    axios
      .get("/")
      .then(({ data }) => {
        console.log(data);
        const { users } = data;
        console.log(users);
      })
  }
  return (
    <div>
      <div className="Nav">
        <div className="logo">
          <img src="https://th.bing.com/th/id/R.205f99e4fdf725e0f6770402c168b5ac?rik=PU%2fyMgojOKszoA&pid=ImgRaw&r=0" />
        </div>
        <button className="btn">Requests</button>
        <button className="btn">
          <Link to={"main"}>main</Link>
        </button>
        <button className="btn">
          <Link to={"Matching"}>Matching</Link>
        </button>
        <button className="btn">100 TASKS</button>
        <div onLoad={handleclick}></div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
