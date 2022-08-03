import React from "react";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import {
  removeTask,
  selectTask,
  updateTask,
} from "./features/counter/taskSlice";
import { Text } from "./features/counter/Text";

function App() {
  const tasks = useAppSelector(selectTask);
  const dispatch = useAppDispatch();
  console.log(tasks);

  function handleUpdateTask(e: any) {
    e.preventDefault();

    const newText = e.target.elements.newText.value;
    const id = e.target.id;

    dispatch(updateTask({ id, newText }));
  }

  return (
    <div className="App">
      <header className="App-header">
        <Text />
      </header>

      <div>
        {tasks.map((task) => {
          return (
            <div key={task.id}>
              <p>{task.text}</p>
              <button
                onClick={() => {
                  dispatch(removeTask(task.id));
                }}
              >
                Delete
              </button>
              <form onSubmit={handleUpdateTask} id={task.id}>
                <input type="text" name="newText" />
                <button type="submit">update</button>
              </form>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
