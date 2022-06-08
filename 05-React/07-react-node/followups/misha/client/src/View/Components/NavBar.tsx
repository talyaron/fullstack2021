import React, {useRef} from 'react'

const NavBar = (props: any) => {

  const isPushed:any =  useRef();

  function focus (){
    
    if(isPushed.current){
      console.log('push')
    isPushed.current.focus();
    }
    else{
      return
    }
  }

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

      <div  className='navBarRight'>
        <div ref={isPushed} onClick={focus} className='button-14'>
          <p onClick={props.handleWindowOpen} id='loginButton'>LOGIN</p>
        </div>
        <div ref={isPushed} onClick={focus} className='button-14'>
          <p onClick={props.handleWindowOpen} id='registerButton'>REGISTER</p>
        </div>
      </div>

    </div>
  )
}

export default NavBar