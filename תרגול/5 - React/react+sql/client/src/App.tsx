import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/show-all-users");
      console.log(data);
    })();
  }, []);

  const handleSendUser = async (e: any) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const age = e.target.elements.age.value;

    const { data } = await axios.post("/api/add-new-user", { name, age });
    console.log(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSendUser}>
        <input type="text" name="name" placeholder="name" />
        <input type="number" name="age" placeholder="age" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
