import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Register from './View/Components/Register'

function App(props: any) {

  const { test } = props;

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('/api/getUsers')
      const allUsers = data.allUsers;

      setUserList(allUsers)

    })();
  }, [test])

  function handleRegister(ev:any){
    ev.preventDefault();
    const name = ev.target.name.value;
    console.log(name)
  }

  return (
    <div className="App">
      <Register submit={handleRegister}/>
      {userList.map((user: any, i) =>
        <div key={i}>
          <h1>{user.name}</h1>
          <h1>{user.age}</h1>
        </div>
      )}
    </div>
  );
}

export default App;
