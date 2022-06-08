
import './App.css';
import axios from "axios";
import React, { useEffect, useState } from "react";
import Registration from './View/Comt/Pages/Registration';

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

  }, []);




  return (
    <div>
      <Registration />
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
