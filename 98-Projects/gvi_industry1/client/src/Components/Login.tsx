import React from 'react'



interface LoginProps{
    loginWindow:boolean;
    setLoginWindow:Function;
}
const Login = (props:LoginProps) => {
    const {loginWindow,setLoginWindow}=props
  return (
    <div className={loginWindow?'login showLogin':'login dontShowLogin'}>
       <button className='closeButton' onClick={()=>{setLoginWindow(false)}} >X</button>
       <h2>Welcome Back!</h2>
       <div className='login__with'>
<button>google</button>
<button>linkedin</button>
       </div>
       <div className='divider'>
       <hr></hr><p>or</p><hr></hr>
       </div>
      
      

    </div>
  )
}

export default Login