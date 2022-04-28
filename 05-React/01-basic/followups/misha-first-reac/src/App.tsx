import React, {useState} from 'react';
import TodoList from './TodoList';

// interface Todos{
//   name: string
// }


function App() {

  const [todos] =  useState(['todos1'])

  // const todos:Todos = {name:'michael'}

  return (
    <>

    <TodoList todos={todos}/>

    <input type='text' />

    <button>Add Task</button>
    <button>Clear Completed</button>
    <div>0 Left To Do</div>

    </>

  )

}

export default App;
