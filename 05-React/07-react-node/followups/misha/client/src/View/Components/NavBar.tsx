import React from 'react'

const NavBar = (props: any) => {

  const {user} = props;

  return (
    <div className='navbar-container'>


      <div className='navBarLeft'>
        <div className='navBarTitle'>
          <p>Blogbuster</p>
        </div>
        <div className='navBarWelcome'>
          {user.name && <p>Welcome back, {user.name}</p>}
        </div>
      </div>

      <div className='navBarCenter'>
        <div className='searchBox'>
          <input type='text' placeholder='search blog...'></input>
        </div>
      </div>

      <div  className='navBarRight'>
        <button onClick={props.handleWindowOpen} id='loginButton' className='button-14'>
          LOGIN
        </button>
        <button onClick={props.handleWindowOpen} id='registerButton' className='button-14'>
         REGISTER
        </button>
      </div>

    </div>
  )
}

export default NavBar