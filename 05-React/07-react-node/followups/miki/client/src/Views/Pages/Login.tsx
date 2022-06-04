import React from 'react'
import { useNavigate } from "react-router-dom";


interface LoginProps {
  handleLogin: any;
  login: boolean;
  admin: any;
}

const Login = (props: LoginProps) => {
  const { handleLogin, login, admin } = props;
  const navigate = useNavigate();

  if (login === true) {
    navigate('/home')
  } 

  return (
    <div>

      <p>Login Page</p>

      <form onSubmit={handleLogin}>
        <input type="text" name="name" placeholder='name' required />
        <input type="password" name="password" placeholder='password' required />
        <input type="submit" value="Login" />
      </form>

    </div>
  )
}

export default Login