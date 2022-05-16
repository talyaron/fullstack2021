import React, { useState } from "react";
import './App.css';
import Ball from "./Ball";


function App() {



  function handleAddCounter() {
    setCounter(counter+1); 
    console.log('counter:',counter);
    
  }
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleAddCounter}>Click me</button>
        <h1>{counter}</h1>
        <Ball  setCounter={setCounter}/>
      </header>
    </div>
  );
}

export default App;
