//questions : 
    // how to do this in one line if possible ? (110)
    // how can i put handles in different files ?


//libraries
import axios from 'axios';

//hooks
import React, { useEffect, useState } from 'react';

//styles
import './App.scss';

//components
import UserForm from './View/Components/RegistrationForm'
import LoginForm from './View/Components/LoginForm'
import UsersList from './View/Components/UsersList'

function App() {

  //setters
  const [userList, setUserList] = useState([]);
  const [unexist, setUnexist] = useState(false);

  //ises
  const [load, isLoad] = useState(false);
  const [loginWindowOn, isLoginWindowOn] = useState(true);
  const [registerWindowOn, isRegisterWindowOn] = useState(true);

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

    if (registerResponse.data === 'AlreadyExists' && !unexist) {

      setUnexist(!unexist)
      setTimeout(() => {
        setUnexist(unexist)
      }, 2000)

    }

    isLoad(false)

    ev.reset();

  }

  async function handleLogin(ev: any) {

    ev.preventDefault();

    const username = ev.target.username.value;
    const password = ev.target.password.value;

    const loginUser: any = { username, password }

    await axios.post('/api/login', loginUser)


    ev.reset();

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
      {registerWindowOn && <UserForm submit={handleRegister} button='REGISTER' unexist={unexist} />}
      {loginWindowOn && <LoginForm submit={handleLogin} />}
      <UsersList userList={userList} handleUpdate={handleUpdate} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
