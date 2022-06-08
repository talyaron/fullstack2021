import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../View/Components/LoginForm'
import UserForm from '../View/Components/UserForm'

const Navbar = () => {
  
  return (
    <div className='navbar'>
        <Link to='/'><h1>Home</h1></Link>
        <Link to='/register'><h1>Register</h1></Link>
        <Link to='/login'><h1>Login</h1></Link>
    </div>
  )
}

export default Navbar