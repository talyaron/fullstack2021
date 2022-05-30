import React from 'react'
import {Link} from "react-router-dom"
import Chocolate from './Chocolate'

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
   <Link to='/home/chocolate'>Chocolate</Link>
   <Link to=''>Vanilla</Link>
    </div>
  )
}

export default HomePage