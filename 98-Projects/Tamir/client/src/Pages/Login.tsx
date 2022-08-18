import axios from "axios";
import img from "../Img/פאביקון.jpg";
import { useState } from "react";

interface User {
  name: string;
  email: string;
  password: string;
  _id: string;
}

const Login = () => {
  const [users, setusers] = useState<Array<User>>([]);

  async function handleLogin(ev: any) {
    ev.preventDefault();
    const email = ev.target.elements.email.value;
    const password = ev.target.elements.password.value;
    if (password && email) {
      const { data } = await axios.post("api/users/Login", { email, password });
      console.log(data);
      if (data.login) {
        window.location.href = "/Home";
      }
    }
  }
  function handleregister(ev: any) {
    ev.preventDefault();
    const name = ev.target.elements.text.value;
    const email = ev.target.elements.email.value;
    const password = ev.target.elements.password.value;
    if (email && password && name) {
      axios.post("/api/users/add-user", { name, email, password });
      const user = { name, email, password, _id: "" };
      setusers([...users, user]);
    }
  }

  return (
    <div
      className="Login"
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        height: 700,
        width: 700,
      }}
    >
      <form onSubmit={handleLogin} className="Login__Login">
        <input type="email" name="email" placeholder="your email here" />
        <input
          type="password"
          name="password"
          placeholder="your password here"
        />
        <input type="submit" value="Login" />
      </form>

      <form onSubmit={handleregister} className="Login__register">
        <input type="text" name="text" placeholder="your name here" />
        <input type="email" name="email" placeholder="your email here" />
        <input
          type="password"
          name="password"
          placeholder="your password here"
        />
        <input type="submit" value="register" />
      </form>
    </div>
  );
};

export default Login;
