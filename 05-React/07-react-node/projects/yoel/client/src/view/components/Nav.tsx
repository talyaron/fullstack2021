import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <div className='nav'>welcome to our website
            </div>
            <Outlet />
        </div>

    )
}

export default Nav