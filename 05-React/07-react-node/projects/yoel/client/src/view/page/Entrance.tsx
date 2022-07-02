import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'
import Home from './Home'

function Entrance() {
  return (
    <div className='entrance'>
         <Link to = '/register' className='entrance__register' >register</Link>
         <Link to = '/login' className='entrance__login' >log-in</Link>
        {/* <Link to = '/login' className='home__login'>log-in</Link>  */}
    </div>
  )
}

export default Entrance