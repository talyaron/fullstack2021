import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import axios from "axios";

interface User {
  name: string;
  _id: string;
}
interface App{
  handlesubmit:Function
}

function App() {
  const [users, setusers] = useState<Array<User>>([]);

  useEffect(() => {
    axios
      .get("/api/users/get-user")
      .then(({ data }) => {
        console.log(data);
        const { users } = data;
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home handlesubmit={handlesubmit} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <h1>hey</h1>
      {users.map((user) => (
        <p key={user._id}>{user.name}</p>
      ))}
      
      </form> */}
      {/* <form onSubmit={handlesubmit}>
        <input type="text" name="name" placeholder="name" />
        <input type="submit" value="submit" />
      </form>  */}
    </div>
  );
}

export default App;
