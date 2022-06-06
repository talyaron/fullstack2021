import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import UserForm from './View/Components/UserForm';


function App() {

  const [userList, setUserList] = useState([])
  const [load, isLoad]: any = useState(false)

  useEffect(() => {

    if (!load) {
      (async () => {
        const { data }: any = await axios.get('/api/getUsers')
        const allUsers = data.allUsers
        console.log(allUsers)
        setUserList(allUsers)

      })
        ();
    }

  }, [load])


  async function handleRegister(ev: any) {
    ev.preventDefault()
    handleSubmit(ev)

    isLoad(true)
    const registerResponse = await axios.post('/api/addUser', handleSubmit(ev))
    if (registerResponse.data === 'Already exists') {
      window.alert('Already exists')
    }
    isLoad(false)
  }

    function handleSubmit(ev: any) {
      ev.preventDefault()

      const name = ev.target.name.value
      const age = ev.target.age.value
      const occupation = ev.target.occupation.value
      const username = ev.target.username.value
      const password = ev.target.password.value
      const image = ev.target.image.value
      console.log(name)

      const userForm = { name, age, occupation, username, password, image }

      return userForm
    }


    return (
      <div className="App">

        <UserForm handleRegister={handleRegister} />
        {userList.map((user: any, i) =>
          <div key={i}>
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
            <h1>{user.username}</h1>
          </div>
        )}
      </div>
    );

  }

  export default App;
