import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get("/api/users/get-user")
      .then(({ data }) => console.log(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="App">
      <h1>hey</h1>
    </div>
  );
}

export default App;
