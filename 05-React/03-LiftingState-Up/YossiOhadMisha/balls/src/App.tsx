import React, { useState } from 'react';
import './App.css';
import ball from './view/compontents/Ball';
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
    console.log(balls)
  }

  creatArray()
  function handleClick() {
    hits = hits + 1;
    console.log(hits)
    setHits(hits)
  }

  const position = 30;

  function randomPositin() {
    let randomPositin = Math.floor(Math.random() * 100)
    return randomPositin
  }

  function randomDelay() {
    let randomDelay = Math.floor(Math.random() * 11)
    return randomDelay
  }

  return (
    <>
      <div className="App">
        <Counter hits={hits}></Counter>
        <Ball handleClick={handleClick} randomPositin={randomPositin()} randomDelay={randomDelay()}></Ball>
        <div>{balls}</div>

      </div>
    </>
  );
}

export default App;
