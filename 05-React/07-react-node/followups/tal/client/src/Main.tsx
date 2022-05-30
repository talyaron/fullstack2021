import {useEffect} from "react";
import { Outlet, Link } from "react-router-dom";

const Main = () => {
    useEffect(()=>{
        //bring all icecreams from DB
    },[])
  return (
    <div>
      <h1>Ice creams</h1>
      <Link to="/dfgderyey">Vanilla</Link>
      <Outlet />
    </div>
  );
};

export default Main;
