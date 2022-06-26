import React from "react";

function Login() {
  return (
   
      <form action="" className="Login">
        <input type="email" className="Login-Email" name="email" placeholder="type your email.." />
        <input type="password" className="Login-Password" name="password" placeholder="type your Password" />
        <button type="submit" value="Login"className="Login-button" />

      </form>
   
  );
}

export default Login;
