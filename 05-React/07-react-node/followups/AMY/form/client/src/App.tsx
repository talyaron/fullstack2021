
import './App.css';
import axios from "axios";
import React, { useEffect, useState } from "react";
import Registration from './View/Components/Registration';

function App() {
  const [usersList, setUsersList]: any = useState([])

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/getUser");

      console.log(data.allUsers);
      const allUsers: any = [...data.allUsers]
      console.log(allUsers);
      setUsersList(allUsers)

    })();

  },[]);


  async function handleRegister(ev:any) {
    ev.preventDefault();
    console.log(ev);
    let { name, age, username, occupation, password, image } = ev.target
    const { data } = await axios.post('/api/addUser', { name, age, username, occupation, password, image })
  
  }

  return (
    <div>
      <Registration submit={handleRegister}/>
      {usersList.map((user: any) =>
        <div className='users' key={user.id}>
          <h1>name: {user.name}</h1>
          <h1>age: {user.age}</h1>
          <h1>username: {user.usename}</h1> </div>
      )
      }
    </div>
  );
}

export default App
