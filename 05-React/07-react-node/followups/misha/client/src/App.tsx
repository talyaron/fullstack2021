//libraries
import axios from 'axios';

//hooks
import React, { useEffect, useState } from 'react';

//styles
import './App.scss';

//components
import UserForm from './View/Components/RegistrationForm'
import LoginForm from './View/Components/LoginForm'

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


    handleSubmit(ev)

    isLoad(true)
    const registerResponse = await axios.post('/api/addUser', handleSubmit(ev))

    if (registerResponse.data === 'AlreadyExists') {
      window.alert('AlreadyExists')
    }

    isLoad(false)

  }

  async function handleLogin(ev: any) {

    ev.preventDefault();

    const username = ev.target.username.value;
    const password = ev.target.password.value;

    const loginUser: any = { username, password }

    const LoginResponse = await axios.post('/api/login', loginUser)
    console.log(LoginResponse)

  }

  async function handleDelete(ev: any) {

    const id = ev.target.id;

    isLoad(true)
    await axios.delete('/api/deleteUser', { data: { id } })
    isLoad(false)

  }

  async function handleUpdate(ev) {

    const userToUpdate = handleSubmit(ev)

    const id = ev.target.id

    const toSend = { userToUpdate, id }

    isLoad(true)
    await axios.patch('/api/updateUser', toSend)
    isLoad(false)

  }

  function handleSubmit(ev: any) {

    ev.preventDefault();
    // how to do this in one line if possible ?
    const name = ev.target.name.value;
    const password = ev.target.password.value;
    const age = ev.target.age.value;
    const occupation = ev.target.occupation.value;
    const username = ev.target.username.value;
    const image = ev.target.image.value;

    const userForm = { name, age, occupation, username, password, image }

    return userForm;
  }

  return (
    <div className="App">
      <UserForm submit={handleRegister} button='REGISTER' />
      <LoginForm submit={handleLogin} />

      {userList.map((user: any, i) =>
        <div key={i}>
          <h1>{user.name}</h1>
          <h1>{user.age}</h1>
          <h1>{user.occupation}</h1>
          <div>
            <img src={user.image} alt={user.name}></img>
          </div>
          <button onClick={handleDelete} id={user._id}>DELETE</button>
          <UserForm submit={handleUpdate} id={user._id} button='UPDATE' />
        </div>
      )}
    </div>
  );
}

export default App;
