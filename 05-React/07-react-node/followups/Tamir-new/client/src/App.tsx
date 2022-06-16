import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  name: string;
  _id: string;
}

function App() {
  const [users, setusers] = useState<Array<User>>([]);

  // useEffect(() => {
  //   axios
  //     .get("/api/users/add-user")
  //     .then(({ data }) => console.log(data))
  //     .catch((err) => console.error(err));
  // }, []);

  // async function handleLog() {
  //   const { data } = await axios.get("/api/users/get-user");
  //   console.log(data);
  //   const {users} = data;
  //   console.log(users);

  //   if(users){
  //     setusers(users)
  //     console.log('hey');
  //   }
  // }

  useEffect(() => {
    // handleLog();
    axios
      .get("/api/users/get-user")
      .then(({ data }) => {
        console.log(data);
        const { users } = data;
        console.log(users);
      })
      .catch((err) => console.error(err));
  }, []);

  async function handlesubmit(ev: any) {
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    if (name) {
      axios.post("/api/users/add-user", { name });
      const user = { name, _id: "" };
      setusers([...users, user]);
    }
  }

  return (
    <div className="App">
      <h1>hey</h1>
      {users.map((user) => (
        <p key={user._id}>{user.name}</p>
      ))}
      <form onSubmit={handlesubmit}>
        <input type="text" name="name" placeholder="name" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;
