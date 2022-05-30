import React from 'react';
import {Outlet} from "react-router-dom";
import {Link} from "react-router-dom";

const Layout = () => {
  return (
    <div className='layout'>
        <header className='layout--header'>
         <Link to="/">Loading page</Link>
          <Link to="/home/chocolate">Chocolate</Link>
          </header>
        <Outlet/>
       <footer className='layout--footer'>
           footer
       </footer>
        
    </div>
  )
}

export default Layout