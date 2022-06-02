import React from 'react'
import { Outlet, Link } from "react-router-dom";
import {useEffect, useState} from "react";
interface IceCream {
  _id:string
    flavorType:string
    flavor:string
    img:string
  
  }

function Layout() {
  const [flavorType]= useState('');
  // function vanillaFilter(flavorType:any){
  //   if(flavorType=="vanilla"){
  //     console.log(flavorType);
      
  //     return(flavorType)
  //   }
  //   else{
  //     return ('there is no vanilla flavors')
  //   }
  // }
  // function chocolateFilter(flavorType:any){
  //   if(flavorType=="chocolate"){
  //     console.log(flavorType);
  //     return(flavorType)
  //   }
  //   else{
  //     return ('there is no chocolate flavors')
  //   }
  // }
  return (
    <div className='bg'>
      <div className="row">
      <Link className="link main" to="/">Home</Link>
      <Link className='link main' to="chocolate">Chocolate</Link>
      <Link className='link main' to="/vanilla">Vanilla</Link>
      </div>
      <Outlet/>
      <footer>Ice Cream we all Scream for Ice Cream</footer>
    </div>
  )
}

export default Layout
