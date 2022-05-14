import React, {useState} from 'react';
import Counter from './View/Components/Counter';
import './View/styles/global.scss';

const uid = Date.now().toString(36) + Math.random().toString(36).substring(2);

interface ballsProps{
  i: number, color: string, id: any
}

const balls:Array<ballsProps> = [
 
]


function App() {
  const [counter, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <Counter balls={balls} counter={counter} setCount={setCount}/>
      </header>
    </div>
  );
}

export default App;
