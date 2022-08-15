import React, { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  loginWindow: boolean;
  setLoginWindow: Function;
  setCurrentUser: Function;
  setCurrentUserType: Function;
}

const Login = (props: LoginProps) => {
  const [showPassword, setShowPassword] = useState(true);

  const { loginWindow, setLoginWindow, setCurrentUser, setCurrentUserType } =
    props;
  const navigate = useNavigate();

  async function handleLoginForm(ev: any) {
    ev.preventDefault();
    const email = ev.target.elements.email.value;
    const password = ev.target.elements.password.value;
  
    const { data } = await axios.post("/api/users/login", { email, password });
 
    const { user } = data;
   

    if (user) {
      setCurrentUserType(user.type);

      console.log();
      
      
      setCurrentUser(user);
      if(user.type==='admin'){
  
          navigate(`mainPageAdmin`);
 
      }else{
       

          navigate(`mainPage`)



      }
    } else {
      window.alert("email or password is incorrect");
    }
  }
  return (
    <div className={loginWindow ? "login showLogin" : "login dontShowLogin"}>
      <button
        className="closeButton"
        onClick={() => {
          setLoginWindow(false);
        }}
      >
        X
      </button>
      <h2 className="login__greeting">Welcome Back!</h2>
      <div className="login__with">
        <button>
          <div>
            <img
              src="./googleLogo.png"
              alt="google logo"
              className="login__with--googleLoginButtonImg"
            />
          </div>
          <div>Continue with google</div>
        </button>
      </div>

      <p className="login__divider">or</p>

      <div className="login__form">
        <form onSubmit={handleLoginForm}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" placeholder="email" />
          <label htmlFor="password"> Password</label>
          <div className="password">
            <input
              type={showPassword ? "password" : "text"}
              id="password"
              name="password"
              placeholder="password"
            />
            <img
              onClick={() => setShowPassword(!showPassword)}
              src={
                showPassword
                  ? "https://cdn2.iconfinder.com/data/icons/ui-essential-10/24/hide-512.png"
                  : "https://cdn2.iconfinder.com/data/icons/ui-essential-10/24/eye-512.png"
              }
            />
          </div>
          <input type="submit" value="Login" className="login__submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
