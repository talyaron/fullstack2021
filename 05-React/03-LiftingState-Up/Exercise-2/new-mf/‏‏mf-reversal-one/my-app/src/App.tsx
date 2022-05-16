import React, { useState } from 'react';
import './Views/styles/global.scss';
import Form from './Views/Comp/Form';
import Grid from './Views/Comp/Grid';


export interface NewArray {
  name: String;
  password: String;
  id: String;
}

function uid() {
  return Math.random().toString(36).slice(-6);
}


function App() {

  const [array, setArray] = useState<Array<NewArray>>([]);

  function handleSub(ev: any) {

    ev.preventDefault();

    const name = ev.target.name.value;
    const password = ev.target.password.value;

    const payload = { name, password, id: uid() }
    setArray([...array, payload])

    ev.target.reset();

  }

  function handleUpdate(ev: any, id: any) {

    ev.preventDefault();

    const name = ev.target.name.value;
    const password = ev.target.password.value;

    const index = array.findIndex((user: any) => user.id === id)
    array[index].name = name
    array[index].password = password

    setArray([...array])

    ev.target.reset();

  }

  function handleDelete(ev: any, id: any) {

    setArray(array.filter((item: any) => item.id !== id))

  }

  return (
    <div className="App">
      <header className="App-header">

        <Form handleSubmit={handleSub} />
        <Grid array={array} handleUpdate={handleUpdate} handleDelete={handleDelete} />

      </header>
    </div>
  );
}

export default App;
