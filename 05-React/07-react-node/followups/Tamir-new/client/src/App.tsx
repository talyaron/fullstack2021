import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
// import { Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import {useNavigate} from "react-router-dom"
import Login from "./Pages/Login";
import axios from "axios";


interface User {
  email: string;
  password: string;
  _id: string;
}
interface App {
  handlesubmit: Function;
  handleLogin: Function;
}

function App() {
  const [users, setusers] = useState<Array<User>>([]);

  useEffect(() => {
    axios
      .get("/api/users/get-user")
      .then(({ data }) => {
        console.log(data);
        const { users } = data;
        return;
      })
      .catch((err) => console.error(err));
  }, []);

  async function handlesubmit(ev: any) {
    ev.preventDefault();
    const email = ev.target.elements.email.value;
    const password = ev.target.elements.password.value;

    if (email && password) {
      axios.post("/api/users/add-user", { email, password });
      const user = { email, password, _id: "" };
      setusers([...users, user]);
    }
  }
  async function handleLogin(ev: any) {
    ev.preventDefault();
    const email = ev.target.elements.email.value;
    const password = ev.target.elements.password.value;
    if (email && password) {
      const {data} = await axios.post("/api/users/Login", { email, password });
      console.log(data);
      if (data.Login) {
        window.location.href="localhost:3000/home"    
       }
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>

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
  );
}

export default App;

{
  /* <h1>hey</h1>
      {users.map((user) => (
        <p key={user._id}>{user.name}</p>
      ))} */
}
