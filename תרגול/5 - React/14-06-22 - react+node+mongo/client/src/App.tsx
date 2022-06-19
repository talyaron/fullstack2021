import axios from "axios";
import { useEffect, useState } from "react";
import FormTask from "./Components/FormTask";

interface tasks {
  _id: string;
  title: string;
  desc: string;
}
function App() {
  const [taskUser, setTaskUser] = useState<Array<tasks>>();

  async function getTask() {
    const { data } = await axios.get("/get-task");
    console.log(data);
    const { ok, task } = data;
    setTaskUser(task);
  }

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className="App">
      <FormTask />
      {taskUser ? (
        <div>
          {taskUser.map((task) => {
            return <div key={task._id}>{task.title}</div>;
          })}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default App;
