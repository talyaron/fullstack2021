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
    console.log(ev);
    

    let {name, password} = ev.target.elements;
    name = name.value; password = password.value;

    const index = add.findIndex(user=> user.id === id);
    add[index].name = name;
    add[index].password = password;

    setAdd([...add])

  }


  return (
    <div className="App">
      <header className="App-header">



        <Form add={add} setAddition={setAdd} />
        <Grid addArray={add} handleUpdate={handleUpdate} />




      </header>
    </div>
  );
}

export default App;
