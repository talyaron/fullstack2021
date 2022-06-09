import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../View/Components/LoginForm'
import UserForm from '../View/Components/UserForm'

const Navbar = () => {

    return (
        <div >
            <div className='navbar'>
                <div className='logo'><Link to='/'><img src="/logo/logo1.png" alt="" /></Link></div>
                <Link to='/'><h1>Home</h1></Link>
                <Link to='/register'><h1>Register</h1></Link>
                <Link to='/login'><h1>Login</h1></Link>
            </div>
        </div>
    )
}

export default Navbar