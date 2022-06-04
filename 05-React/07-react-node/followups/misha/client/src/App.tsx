//libraries
import axios from 'axios';

//hooks
import React, { useEffect, useState } from 'react';

//styles
import './App.css';

//components
import Register from './View/Components/Register'
import Login from './View/Components/Login'

function App() {

  const [userList, setUserList] = useState([]);
  const [load, isLoad] = useState(false);

  useEffect(() => {
    if (!load) {
      (async () => {

        const { data } = await axios.get('/api/getUsers')
        const allUsers = data.allUsers;
        setUserList(allUsers)

      })();

      console.log('shalom')
    }
  }, [load])

  async function handleRegister(ev: any) {

    ev.preventDefault();

    console.log(ev)

    // how to do this in one line if possible ?

    const name = ev.target.name.value;
    const password = ev.target.password.value;
    const age = ev.target.age.value;
    const occupation = ev.target.occupation.value;
    const username = ev.target.username.value;
    const image = ev.target.image.value;

    console.log(name, age, occupation, username)

    const userForm = { name, age, occupation, username, password, image }

    isLoad(true)
    await axios.post('/api/addUser', userForm)
    isLoad(false)

  }

  async function handleLogin(ev:any){

    ev.preventDefault();

    const username = ev.target.username.value;
    const password = ev.target.password.value;

    const loginUser:any = {username,password}

    await axios.post('/api/login', loginUser)

  }

  async function handleDelete(ev: any) {

    const id = ev.target.id;

    isLoad(true)
    await axios.delete('/api/deleteUser', { data: { id } })
    isLoad(false)

  }

  return (
    <div className="App">
      <Register submit={handleRegister} />
      <Login submit={handleLogin} />

      {userList.map((user: any, i) =>
        <div key={i}>
          <h1>{user.name}</h1>
          <h1>{user.age}</h1>
          <button onClick={handleDelete} id={user._id}>DELETE</button>
        </div>
      )}
    </div>
  );
}

export default App;
