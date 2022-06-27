import axios from "axios";
import { Cookies } from "react-cookie";
import { Link } from "react-router-dom";
import Home from "./Home";


const Login = () => {
  async function handlesubmit(ev: any) {
    ev.preventDefault();
    const email = ev.target.elements.email.value;
    const password = ev.target.elements.password.value;

    if (email && password) {
      axios.post("/api/users/add-user", { email, password });
      const user = { email, password, _id: "" };
    }
  }
  async function handleLogin(ev: any) {
    ev.preventDefault();
    const email = ev.target.elements.email.value;
    const password = ev.target.elements.password.value;
    if (email && password) {
      const {data} = await axios.post("/api/users/Login", { email, password });
      if (data.login) {
        window.location.href="/home"   
       }
    }
  }
  return (
    <div className="Login">
      <div className="Login__form">
      <form onSubmit={handlesubmit}>
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <input type="submit" value="submit" />
      </form>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <input type="submit" value="Login" />
      </form>
      </div>
    </div>
   
  )
}

export default Login