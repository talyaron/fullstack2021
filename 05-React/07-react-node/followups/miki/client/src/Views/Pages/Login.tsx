import React from 'react'

interface LoginProps {
  handleLogin: any;
}

const Login = (props: LoginProps) => {
  const {handleLogin} = props;
  
  return (
    <div>

      <p>Login Page</p>

      <form onSubmit={handleLogin}>
        <input type="text" name="name" placeholder='name' />
        <input type="password" name="password" placeholder='password' />
        <input type="submit" value="Login" />
      </form>

    </div>
  )
}

export default Login