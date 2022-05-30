import React,{useState} from 'react'
import {Link} from "react-router-dom"


const Chocolate = () => {
 
  return (
    <div className='chocolate'>
    <h1>Chocolate</h1>
    <div className='chocolate--types'>
    <Link to='' >Milk Chocolate</Link>
    <Link to=''  >mint Chocolate</Link> 
    <Link to='' >dark Chocolate</Link>
    <Link to='' >nutella Chocolate</Link>

    </div>
   
    </div>
  )
}

export default Chocolate