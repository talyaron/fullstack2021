import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import UserForm from '../View/Components/UserForm'

const Navbar = (props:any) => {
    const {RegClassShow, handleShowWindow  } = props

    return (
        <div >
            <div className='navbar'>
                <button onClick={handleShowWindow}>REGISTER</button>
            </div>
        </div>
    )
}

export default Navbar