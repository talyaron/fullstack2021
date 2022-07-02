import React from 'react'
import { Outlet } from 'react-router-dom'

function NavEntrance() {
    return (
        <div>
            <div className='nav'>welcome to our blogging
            </div>
            <Outlet />
        </div>
    )
  
}

export default NavEntrance