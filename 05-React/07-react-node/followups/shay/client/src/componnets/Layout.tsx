import React from 'react'
import { Outlet, Link } from "react-router-dom";
import {useEffect, useState} from "react";
interface IceCream {
  _id:string
    flavorType:string
    flavor:string
    img:string
  
  }
//nav bar
function Layout() {

  return (
    <div className='bg'>
      <h1>I scream for ICE CREAM SHOP</h1>
      <div className="row">
      <Link className="link main" to="/">Home</Link>
      <Link className='link main' to="chocolate">Chocolate</Link>
      <Link className='link main' to="/vanilla">Vanilla</Link>
      </div>
      <Outlet/>
      <footer>I scream for ICE CREAM SHOP we all Scream for ICE CREAM SHOP</footer>
    </div>
  )
}

export default Layout
