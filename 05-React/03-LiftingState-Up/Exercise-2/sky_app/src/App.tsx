import {useState} from 'react';
import './view/styles/global.scss';
import Ball from './view/components/Ball';
import Counter from './view/components/Counter';

function App() {

  const [counter, setCounter] = useState(0);


  return (
    <div className="App">
      <header className="App_header">
        <Ball counter = {counter} setCounter = {setCounter}/>
        <Counter counter ={counter}/>
      </header>
    </div>
  );
}

export default App;
