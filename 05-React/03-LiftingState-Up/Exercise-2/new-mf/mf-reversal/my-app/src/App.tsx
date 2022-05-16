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

  const [array, setArray] = useState<Array<Arr>>([])

  return (
    <div className="App">
      <header className="App-header">

        <Form array={array} setArray={setArray} />
        <Grid array={array} setArray={setArray} />


      </header>
    </div>
  );
}

export default App;
