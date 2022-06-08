import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import ListAllUsers from './Pages/ListAllUsers';
import LoginForm from './View/Components/LoginForm';
import UserForm from './View/Components/UserForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import OneUser from './Pages/OneUser';
import Navbar from './Pages/Navbar';
import Footer from './View/Components/Footer'

function App() {
  const [userList, setUserList] = useState([])
  const [load, isLoad] = useState(false);

  useEffect(() => {

    if (!load) {
      (async () => {
        const { data } = await axios.get('/api/getUsers')
        const allUsers = data.allUsers;
        setUserList(allUsers)
        console.log(allUsers)
      })();
    }
  }, [load])


  async function handleRegister(ev: any) {
    ev.preventDefault();

    handleSubmit(ev)
    isLoad(true)
    const registerResponse = await axios.post('/api/addUser', handleSubmit(ev))

    if (registerResponse.data === 'Already exists') {
      window.alert('AlreadyExists')
    }
    isLoad(false)
  }


  function handleSubmit(ev: any) {
    ev.preventDefault();
    const name = ev.target.name.value
    const age = ev.target.age.value
    const text = ev.target.text.value
    const username = ev.target.username.value
    const password = ev.target.password.value
    const image = ev.target.image.value

    const userForm = { name, age, text, username, password, image }

    return userForm
  }


  function handleLogin(ev: any) {
    ev.preventDefault();

    const username = ev.target.username.value
    const password = ev.target.password.value

    const loginUser: any = { username, password }
    const LoginResponse: any = axios.post('/api/login', loginUser)

    if (LoginResponse.data == "Password not match") {

      window.alert("Password doesn't match")
    } else {
      window.alert("You are in!")
    }

  }

  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ListAllUsers userList={userList} />}></Route>
          <Route path='/user/:id' element={<OneUser />}></Route>
          <Route path='/register' element={<UserForm handleRegister={handleRegister} />}></Route>
          <Route path='/login' element={<LoginForm handleLogin={handleLogin} />}></Route>
        </Routes>

      </BrowserRouter>
      <Footer />
    </div>

  );
}

export default App;
