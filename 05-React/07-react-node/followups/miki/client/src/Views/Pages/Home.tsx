import React from 'react'
import {Outlet} from 'react-router-dom'

const Home = () => {
  return (
    <div className='comp'>
        <h1>Chokate Boobamela</h1>

        <Outlet />
    </div>
  )
}

export default Home