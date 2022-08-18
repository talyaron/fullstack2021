import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
         <button className="Home__btn"><Link to="about" className="Home__Link">about</Link></button>  
         <button className="Home__btn"><Link to="conect" className="Home__Link">Conect</Link></button>  
         <Outlet />
    </div>
  )
}

export default Navbar