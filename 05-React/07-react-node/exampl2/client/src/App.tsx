import axios from "axios";
import { useEffect, useState } from "react";
import "./App.scss";

import {multi} from './control/helpers'

interface User {
  name: string;
  _id: string;
}

function App() {
  const [users, setUsers] = useState<Array<User>>([]);
  useEffect(() => {
    axios
      .get("/api/users/get-user")
      .then(({ data }) => {
        console.log(data);
        console.log(multi(5))
        const { users } = data;
        if (users) {
          setUsers(users);
        }
      })
      .catch((err) => console.error(err));
  }, []);

async function handleUpdateName(ev:any){
  try {
    const name = ev.target.value;
    if(name){
      await axios.post('api/users/add-user',{name});
      
      const user = {name, _id:''}
      setUsers([...users,user])
    }
  } catch (error) {
    console.error(error)
  }
}

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" placeholder="Enter name" onBlur={handleUpdateName} />
        <img src={logo} className="App-logo" alt="logo" />

        {users.map((user) => (
          <p key={user._id}>{user.name}</p>
        ))}
      </header>
    </div>
  );
}

export default App;
