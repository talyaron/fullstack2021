import React from 'react';
import {Outlet} from "react-router-dom";
import {Link} from "react-router-dom";

const Layout = () => {
  return (
    <div className='layout'>
        <header className='layout--header'>
          <h3>Ice cream shop</h3>
          <div className='layout--header--links'>
          <Link to="/">Loading page</Link>
          <Link to="/home/chocolate">Chocolate</Link>
          <Link to="/home/vanilla">Vanilla</Link>
          </div>
          
          
          </header>
        <Outlet/>
       <footer className='layout--footer'>
           footer
       </footer>
        
    </div>
  )
}

export default Layout