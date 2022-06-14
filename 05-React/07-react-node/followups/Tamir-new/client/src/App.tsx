import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [name, setname] = useState("");

  async function handlesubmit(ev: any) {
    ev.preventDefault();
    const name = ev.target.elements.name.value;
    console.log(name);
  }
  useEffect(() => {
    axios
      .get("/api/users/add-user")
      .then(({ data }) => console.log(data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get("/api/users/get-user")
      .then(({ data }) => console.log(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1>hey</h1>
      <form onSubmit={handlesubmit}>
        <input type="text" name="name" placeholder="name" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;
