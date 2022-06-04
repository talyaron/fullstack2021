import React,{useState} from 'react'

const Login = () => {
    const [showPassword,setShowPassword]=useState(true)
  return (
    <div className='login'>
        
        <form className='login__form'>
        <h3 className='login__title'>Welcome back!</h3>
        <label htmlFor='username'>Enter Username</label>
          <input type='text' id="username" name="username" placeholder='username'/>
        <label htmlFor='password'>Enter Password</label> 
        <div>
        <input type={showPassword?'password':"text"} id="password" name="password" placeholder='password'/> 
        
        <img onClick={()=>setShowPassword(!showPassword)} src={showPassword?"https://cdn2.iconfinder.com/data/icons/ui-essential-10/24/hide-512.png":"https://cdn2.iconfinder.com/data/icons/ui-essential-10/24/eye-512.png"}/>

        </div>
      
       
        <input type="submit" value="Login"/>
        </form>
    </div>
  )
}

export default Login