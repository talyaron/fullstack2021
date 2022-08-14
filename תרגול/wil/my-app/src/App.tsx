import React from "react";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import {
  removeTask,
  selectTask,
} from "./features/counter/taskSlice";
import { Text } from "./features/counter/Text";
import './App.css'

function App() {
  const tasks = useAppSelector(selectTask);
  const dispatch = useAppDispatch();
  console.log(tasks);


  return (
    <div className="App">
      <Text />
        <div className="">
        {tasks.map((task: any) => {
          return (
            <div onClick={() => {
              dispatch(removeTask(task.id));
            }}
             key={task.id}>
              <p>{task.text}</p>        
            </div>
          );
        })}
        </div>
    </div>
  );
}


export default App;