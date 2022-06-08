import React from 'react'
import { Outlet } from 'react-router-dom'

function handleLogin(){

}
function Login() {
    return (
        <div>
           <form onSubmit={handleLogin}>
               <input type="text" name="username"/>
               <input type="text" name="password" />
               <input type="submit" value="log-in" />
           </form>
        </div>
    )
}

export default Login