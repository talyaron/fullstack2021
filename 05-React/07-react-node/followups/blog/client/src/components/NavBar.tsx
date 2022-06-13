import React from 'react'
import { Link,Outlet,useNavigate } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <ul>
            <li>
                <Link to="/" className="">Home</Link>
            </li>
            <li>
                <Link to="/about" className="">About</Link>
            </li>
            <li>
                <Link to="/article" className="">Article</Link>
            </li>
            <li>
                <Link to="/articles-list" className="">Articles List</Link>
            </li>



        </ul>
    </nav>
  )
}

export default NavBar