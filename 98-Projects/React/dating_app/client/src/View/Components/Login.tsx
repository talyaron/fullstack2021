import React,{useState} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";




const Login = () => {
    const [showPassword,setShowPassword]=useState(true)
    const navigate=useNavigate()


    async function handleLogin(ev:any){
      ev.preventDefault()
     
    
    let {username, password}=ev.target.elements
     username=username.value
     password=password.value
     console.log(username,password)
    
     const {data} = await axios.post('/api/login',{username,password})
          console.log(data);
         
          if(data.login===true){
            setTimeout(() => {
              navigate(`/navBar`);
            }, 1500);
          }else{
            console.log(data)
          }
         
    
    }
    
  return (
    <div className='login' >
     
        
        <form className='login__form' onSubmit={handleLogin} >
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