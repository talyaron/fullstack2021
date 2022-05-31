import { useState } from 'react'
import './Views/styles/App.scss';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { useEffect} from 'react';


//components
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Layout from './Layout';
import Marketing from './pages/Marketing';
import Medical from './pages/Medical';
import Ofev from './Views/Components/Ofev';
import Jardiance from "./Views/Components/Jardiance";
import Empagliflozin from './Views/Components/Empagliflozin';
import Nintedanib from './Views/Components/Nintedanib'

export interface EmployeeArray {
  name: string;
  password: string;
}

function App() {
  const [login, setLogin] = useState(false)
  // const navigate = useNavigate()


  async function handleLogin(e: any) {

    e.preventDefault()

    const name = e.target.name.value
    const password = e.target.password.value

    const { data } = await axios.post('/employees/login', { name, password })
    const { login } = data
    console.log(login);


    if (login === true) {

      setLogin(login)

    }

    e.target.reset()
  }


  return (


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login handleLogin={handleLogin} login={login} />}></Route>

        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />}></Route>

          <Route path="marketing" element={<Marketing />}>
            <Route index element={<Jardiance />}></Route>
            <Route path="ofev" element={<Ofev />}></Route>
          </Route>

          <Route path="medical" element={<Medical />}>
            <Route index element={<Empagliflozin />}></Route>
            <Route path="nintedanib" element={<Nintedanib />}></Route>
          </Route>
          <Route path="about" element={<About />}></Route>
        </Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
