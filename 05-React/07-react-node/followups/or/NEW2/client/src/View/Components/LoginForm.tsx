import React from 'react'

const LoginForm = (props: any) => {

  const { handleLogin } = props

  return (
    <div>

      <form onSubmit={handleLogin} className="registerForm">
        <h1>Log-in</h1>
        <input type="text" name="username" placeholder='Username' />
        <input type="password" name="password" placeholder='Password' />
        <button>LOGIN</button>
      </form>
    </div>
  )
}

export default LoginForm