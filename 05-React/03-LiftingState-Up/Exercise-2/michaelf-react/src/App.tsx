import React, { useState } from 'react';
import './Views/styles/global.scss';
import './Views/Comp/Counter'
import Ball from './Views/Comp/Ball'

function App() {

  const [counter, setCounter] = useState(0);

  return (
    <div className="App">

      <Ball setCount={setCounter} counter={counter} />

    </div>
  );
}

export default App;
