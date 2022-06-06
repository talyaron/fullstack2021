import React from 'react'

const NavBar = (props: any) => {
  return (
    <div className='navbar-container'>


      <div className='navBarLeft'>
        <div className='navBarTitle'>
          <p>Blogbuster</p>
        </div>
        <div className='navBarWelcome'>
          <p>Welcome back, {props.userName}</p>
        </div>
      </div>

      <div className='navBarCenter'>
        <div className='searchBox'>
          <input type='text' placeholder='search blog...'></input>
        </div>
      </div>

      <div className='navBarRight'>
        <div className='rightSideBox'>
          <p onClick={props.handleWindowOpen} id='loginButton'>LOGIN</p>
        </div>
        <div className='rightSideBox'>
          <p onClick={props.handleWindowOpen} id='registerButton'>REGISTER</p>
        </div>
      </div>

    </div>
  )
}

export default NavBar