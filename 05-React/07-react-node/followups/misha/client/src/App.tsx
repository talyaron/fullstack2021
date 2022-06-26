
// questions

// focus useref

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
  const [idToUpdate, setIdToUpdate] = useState('')
  //ises
  const [load, isLoad] = useState(false);
  const [loginWindowOn, isLoginWindowOn] = useState(false);
  const [registerWindowOn, isRegisterWindowOn] = useState(false);
  const [updateWindowOn, isUpdateWindowOn] = useState(false);
  const [loginFail, isLoginFail] = useState(false)


  function updateProcess(ev) {

    isUpdateWindowOn(true)
    setIdToUpdate(ev.target.id)


  }
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
      {updateWindowOn && <UserForm submit={handleUpdate} button='UPDATE' passwordsMatch={passwordsMatch} unexist={unexist} />}
      {registerWindowOn && <UserForm submit={handleRegister} button='REGISTER' passwordsMatch={passwordsMatch} unexist={unexist} />}
      {loginWindowOn && <LoginForm submit={handleLogin} loginFail={loginFail} />}
      <UsersList loggedInUser={loggedInUser} userList={userList} isUpdateWindowOn={isUpdateWindowOn} handleDelete={handleDelete} updateProcess={updateProcess} />
    </div>
  );


  async function handleRegister(ev: any) {

    ev.preventDefault();

    const userForm = handleSubmit(ev);


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

    try {

      const loginResponse = await axios.post('/api/login', loginUser)


      if (loginResponse.data.user) {
        setLoggedInUser(loginResponse.data.user)
        setLoggedIn(true)
        isLoginWindowOn(false)

      }

      else {
        isLoginFail(true)
        setTimeout(() => {
          isLoginFail(false)
        }, 2000)
      }

    } catch (error) {

      isLoginFail(true)
      setTimeout(() => {
        isLoginFail(false)
      }, 2000)

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


    console.log(ev)

    const userToUpdate = handleSubmit(ev)

    // Object.values(userToUpdate).forEach((key) => {
    //   console.log(key)
    // });


    const myUserToUpdate = {
      ...loggedInUser,
      ...userToUpdate
    }

    const toSend = { userToUpdate: myUserToUpdate, idToUpdate }

    await axios.patch('/api/updateUser', toSend)

    setLoggedInUser(myUserToUpdate)

    isUpdateWindowOn(false)

    isLoad(false)
    // isLoad(false)

  }

  function handleSubmit(ev: any):any {

    ev.preventDefault();

    // const name = ev.target.name.value;
    // const password = ev.target.password.value;
    // const passwordConfirm = ev.target.passwordConfirm.value;
    // const age = ev.target.age.value;
    // const occupation = ev.target.occupation.value;
    // const username = ev.target.username.value;
    // const image = ev.target.image.value;

    // const userForm = { name, age, occupation, username, password, passwordConfirm, image }

    // return userForm;

    const myObjectToSave = {}


    Object.keys(ev.target).forEach(key => {
      if (ev.target[key].value) myObjectToSave[ev.target[key].name] = ev.target[key].value
    })

    console.log(myObjectToSave)

    return myObjectToSave

  }


}

export default App;
