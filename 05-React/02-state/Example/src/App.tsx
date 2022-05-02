import { useState } from "react";
import logo from "./logo.svg";
import "./View/styles/global.scss";

import Box from "./View/Components/Box";


function App() {
  const [counter, setCounter] = useState<number>(500);
  const [text, setText] = useState<string>('Start writing somthing');

  function handleAddCounter() {
    let tempCounter = counter;
    setCounter(counter+1); //new value
    // setCounter(counter+1);
    tempCounter++
    console.log('tempCounter:',tempCounter);
    console.log('counter:',counter);
    
  }
  
  function handleText(ev:any){
    setText(ev.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <h1>
          State is a piece of data inside a component, that when changed, the UI
          can change also. The way to change it is only with a setter:
          const [counter, <b>setCounter</b>] = useState(initialValue)
        </h1>
        <button onClick={handleAddCounter}>ADD</button>
        <h2>Counter: {counter} </h2>
        <input type="text" onKeyUp={handleText} />
        <p>Text: {text}</p>
      </header>
    </div>
  );
}

export default App;
