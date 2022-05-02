import React, { useState } from 'react';

//css
import './styles/dist/App.css';
import './styles/dist/Buttons.css'
import './styles/dist/TodoList.css'

//components
import Buttons from './Buttons';
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState(['todo1', 'todo2'])
  return (
    <div className="App">

      <header className="App-header">

        <Buttons text="Zero" />
        <TodoList todos={todos} />



      </header>

    </div>
  );
}

export default App;
