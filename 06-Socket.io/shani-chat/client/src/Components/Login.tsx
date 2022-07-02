import React,{useEffect, useRef} from 'react'
import {useNavigate} from "react-router-dom";
interface LoginProps{
    setUser:Function;
    user:string;
}

const Login = (props:LoginProps) => {
    const navigate=useNavigate()
    const {setUser,user}=props
    const input=useRef<HTMLInputElement>(null)
    function handleLogin(ev:any){
        ev.preventDefault()
        console.log(input.current?.value)
     const loggedInUser=input.current?.value
     setUser(loggedInUser)

    }
    useEffect(()=>{
        if(user){
            navigate("rooms")
        }else{
            navigate("/")
        }
    },[user])
    
    
  return (
    <div>
        <form onSubmit={handleLogin}>
            <input type="text" name="name" placeholder='user name' ref={input}/>
            <input type="submit" value='login'/>
        </form>
    </div>
  )
}

export default Login