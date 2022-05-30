import React from 'react';
import {Link, Outlet} from "react-router-dom"

const ChocoLayout = () => {
  return (
    <div className='chocoLayout'>
        <h1>Chocolate Flavors</h1>
        <div className='chocoLayout--types'>
    <Link to='/home/chocolate/milk' >Milk Chocolate</Link>
    <Link to='/home/chocolate/mint'  >mint Chocolate</Link> 
    <Outlet/>
    
   

    </div>
    </div>
  )
}

export default ChocoLayout