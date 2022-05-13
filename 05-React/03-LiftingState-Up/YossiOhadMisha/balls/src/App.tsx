import React, { useState } from 'react';
import './App.css';
import Ball from './view/compontents/Ball'
import Counter from './view/compontents/Counter'


function App() {

  let [hits, setHits] = useState(0)
  // let [balls, setBalls] = useState<Array<string>>([])

  let balls: any = []

  function creatArray() {
    
    for (let i = 0; i < 10; i++) {
      const oneBall: any = <Ball handleClick={handleClick} randomPositin={randomPositin()} randomDelay={randomDelay()}></Ball>
      balls.push(oneBall)
      // setBalls([...oneBall])
    }

  }

  creatArray()

  function handleClick(ev:any) {
    setHits(hits+1)
  }

  function randomPositin() {
    return (Math.random() * 100)
  }

  function randomDelay() {
    return (Math.random() * 11)
  }

  return (
    <>
      <div className="App">
        <Counter hits={hits}></Counter>
        <div>{balls}</div>

      </div>
    </>
  );
}

export default App;
