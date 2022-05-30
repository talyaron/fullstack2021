import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='nav'>
            <Link to='/' className='site-title'>Bloch Art</Link>
            <ul>
                <li>
                    <Link to='/products' className='link'>Products</Link>
                </li>
                <li>
                    <Link to='/about' className='link'>About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar