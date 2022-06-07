import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import ListAllUsers from './Pages/ListAllUsers';
import LoginForm from './View/Components/LoginForm';
import UserForm from './View/Components/UserForm';


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
    const occupation = ev.target.occupation.value
    const username = ev.target.username.value
    const password = ev.target.password.value
    const image = ev.target.image.value

    const userForm = { name, age, occupation, username, password, image }
    console.log(userForm)
    return userForm
  }


  function handleLogin(ev: any) {
    ev.preventDefault();

    const username = ev.target.username.value
    const password = ev.target.password.value

    const loginUser: any = { username, password }
    const LoginResponse: any = axios.post('/api/login', loginUser)
    console.log(LoginResponse)

    if (LoginResponse.data === "Password doesn't match") {
      window.alert("Password doesn't match")
    }

  }

  return (
    <div className="App">
      <UserForm handleRegister={handleRegister} />
      <LoginForm handleLogin={handleLogin} />
      <ListAllUsers userList={userList} />
    </div>
  );
}

export default App;
