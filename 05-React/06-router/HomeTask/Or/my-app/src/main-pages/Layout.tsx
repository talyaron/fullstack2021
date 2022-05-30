import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className='layout'>
        <h1>Ice Cream Shop</h1>
        <Link to='/'>
            <button>Home</button>
        </Link>
        <Link to='/Chocolate'>
            <button>Chocolate</button>
        </Link>
        <Link to='/Vanilla'>
            <button>Vanilla</button>
        </Link>
        <Outlet/>
    </div>
  )
}

export default Layout