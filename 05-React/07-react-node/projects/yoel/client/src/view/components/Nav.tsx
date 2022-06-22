import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <div className='nav'>Bloging
            </div>
            <Outlet />
        </div>

    )
}

export default Nav