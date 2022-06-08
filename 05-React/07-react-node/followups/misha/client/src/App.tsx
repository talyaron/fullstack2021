
// questions

// ev.reset()?
// focus useref
// windowopenbug


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
import NavBar from './View/Components/NavBar';

function App() {

  //setters
  const [userList, setUserList] = useState([]);
  const [unexist, setUnexist] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState({})

  //ises
  const [load, isLoad] = useState(false);
  const [loginWindowOn, isLoginWindowOn] = useState(false);
  const [registerWindowOn, isRegisterWindowOn] = useState(false);
  const [loginFail, isLoginFail] = useState(false)

  function handleWindowOpen(ev) {

    if (ev.target.id === 'loginButton') {
      if (!loginWindowOn && !registerWindowOn) {

        isLoginWindowOn(true)
      }
      else {

        isRegisterWindowOn(false)
        isLoginWindowOn(false)
      }
    }

    if (ev.target.id === 'registerButton') {

      if (!registerWindowOn && !loginWindowOn) {
        isRegisterWindowOn(true)
      }
      else {
        isRegisterWindowOn(false)
        isLoginWindowOn(false)
      }
    }

  }

  // useEffect(() => {
  //   if (!load) {

  //     (async () => {

  //       const { data } = await axios.get('/api/getUsers')
  //       const allUsers = data.allUsers;
  //       setUserList(allUsers)


  //     })();

  //     console.log('shalom')
  //   }

  // }, [load])

  if (!load) {
    getAllUsers()
    isLoad(true)
  }

  function getAllUsers() {
    (async () => {

      const { data } = await axios.get('/api/getUsers')
      const allUsers = data.allUsers;
      setUserList(allUsers)


    })();

    console.log('shalom')

  };


  return (
    <div className="App">
      <NavBar handleWindowOpen={handleWindowOpen} user={loggedInUser}></NavBar>
      {registerWindowOn && <UserForm submit={handleRegister} button='REGISTER' passwordsMatch={passwordsMatch} unexist={unexist} />}
      {loginWindowOn && <LoginForm submit={handleLogin} loginFail={loginFail} />}
      <UsersList loggedInUser={loggedInUser} userList={userList} handleUpdate={handleUpdate} handleDelete={handleDelete} />
    </div>
  );


  async function handleRegister(ev: any) {

    ev.preventDefault();

    const userForm = handleSubmit(ev);

    console.log(userForm.password, userForm.passwordConfirm)

    if (userForm.password === userForm.passwordConfirm) {

      

      isRegisterWindowOn(false)

      const registerResponse = await axios.post('/api/addUser', handleSubmit(ev))

      isLoad(false)

      if (registerResponse.data === 'AlreadyExists' && !unexist) {

        setUnexist(!unexist)

        setTimeout(() => {
          setUnexist(unexist)
        }, 2000)

      }

      // isLoad(false)

    }

    else {
      console.log('dont match')
      setPasswordsMatch(!passwordsMatch)

      setTimeout(() => {
        setPasswordsMatch(passwordsMatch)
      }, 2000)

    }


    // ev.reset();
  }

  async function handleLogin(ev: any) {

    ev.preventDefault();

    const username = ev.target.username.value;
    const password = ev.target.password.value;

    const loginUser: any = { username, password }

    const loginResponse = await axios.post('/api/login', loginUser)

    console.log(loginResponse.data)

    if (loginResponse.data.test === 'error') {

      isLoginFail(true)
      setTimeout(() => {
        isLoginFail(false)
      }, 2000)
    }

    if (loginResponse.data.user) {
      setLoggedInUser(loginResponse.data.user)
      setLoggedIn(true)
      isLoginWindowOn(false)

    }

    // ev.reset();

  }

  async function handleDelete(ev: any) {

    const id = ev.target.id;

    isLoad(false)
    await axios.delete('/api/deleteUser', { data: { id } })
    // isLoad(false)

  }

  async function handleUpdate(ev) {

    const userToUpdate = handleSubmit(ev)

    const id = ev.target.id

    const toSend = { userToUpdate, id }

    isLoad(false)
    await axios.patch('/api/updateUser', toSend)
    // isLoad(false)

  }

  function handleSubmit(ev: any) {

    ev.preventDefault();
    const name = ev.target.name.value;
    const password = ev.target.password.value;
    const passwordConfirm = ev.target.passwordConfirm.value;
    const age = ev.target.age.value;
    const occupation = ev.target.occupation.value;
    const username = ev.target.username.value;
    const image = ev.target.image.value;

    const userForm = { name, age, occupation, username, password, passwordConfirm, image }

    return userForm;
  }


}

export default App;
