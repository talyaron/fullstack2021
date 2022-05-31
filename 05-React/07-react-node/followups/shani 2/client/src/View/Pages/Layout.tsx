import React from 'react';


import { Outlet, Link } from "react-router-dom";

const Layout = () => {

  return (
    <div style={{height:'50px'}}>
        <h1>Layout for ice cream Shop</h1>
        <Link to='/home/:icecreamId'>ice cream</Link>
        <Outlet/>
    </div>
  )
}

export default Layout