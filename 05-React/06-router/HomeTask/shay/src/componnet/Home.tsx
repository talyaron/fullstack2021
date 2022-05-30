import { useEffect, useState } from "react"
import {Link, Outlet} from "react-router-dom"


function Home() {

  return (
    <div className="bg">
      <header>
      <h1>Ice Cream Shop</h1>
      <div className="flex">
      <Link className="nav"  to="/">Chocolate</Link> 
      <Link className="nav" to="vanilla">Vanilla</Link>
      </div>
  
      </header>
<Outlet/>

    </div>
  )
}

export default Home
