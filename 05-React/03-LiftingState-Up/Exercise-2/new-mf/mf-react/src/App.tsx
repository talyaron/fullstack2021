import React, { useState } from 'react';
import './Views/styles/global.scss';
import Form from './Views/Comp/Form';
import Grid from './Views/Comp/Grid';

export interface Arr {
  name: String;
  password: String;
  id: String;
}

function App() {

  const [add, setAdd] = useState<Array<Arr>>([]);

  function handleUpdate(ev: any, id: String) {

    ev.preventDefault();
    console.log(ev.target.id);


    let { name, password } = ev.target.elements;
    name = name.value; password = password.value;

    const index = add.findIndex(user => user.id === id);
    add[index].name = name;
    add[index].password = password;

    setAdd([...add])

  }

  function handleDelete(ev: any, id: String) {

    setAdd(add.filter(user => user.id !== id))

  }

  return (
    <div className="App">
      <header className="App-header">



        <Form add={add} setAddition={setAdd} />
        <Grid arr={add} handleUpdate={handleUpdate} handleDelete={handleDelete} />




      </header>
    </div>
  );
}

export default App;
