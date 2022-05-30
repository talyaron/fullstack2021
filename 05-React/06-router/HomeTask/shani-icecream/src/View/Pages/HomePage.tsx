import React from 'react'
import {Link} from "react-router-dom"


const HomePage = () => {
  return (
    <div className='homePage'>
      <h1>HomePage</h1>
      <div className='homePage__flavors'>
      <Link to='/home/chocolate' className='homePage__flavors--chocolate'>Chocolate</Link>
       <Link to='/home/vanilla' className='homePage__flavors--vanilla'>Vanilla</Link>
      </div>
  
    </div>
  )
}

export default HomePage