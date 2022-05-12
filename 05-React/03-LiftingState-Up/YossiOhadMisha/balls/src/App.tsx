import React, { useState } from 'react';
import './App.css';
import ball from './view/compontents/Ball';
import Ball from './view/compontents/Ball'
import Counter from './view/compontents/Counter'


function App() {


  let [hits, setHits] = useState(0)
  let [balls, setBalls] = useState([])

  function handleClick() {
    hits = hits + 1;
    console.log(hits)
    setHits(hits)
  }

  const position = 30;

  function randomDelay(){
    let randomDelay = Math.floor(Math.random() * 11)
    return randomDelay
  }

  return (
    <>
      <div className="App">
        <Counter hits={hits}></Counter>
        <Ball click={handleClick} position={10} delay={randomDelay()}></Ball>
        <Ball click={handleClick} position={20} delay={randomDelay()}></Ball>
        <Ball click={handleClick} position={30} delay={randomDelay()}></Ball>
        <Ball click={handleClick} position={40} delay={randomDelay()}></Ball>
        <Ball click={handleClick} position={50} delay={randomDelay()}></Ball>
        <Ball click={handleClick} position={60} delay={randomDelay()}></Ball>
        <Ball click={handleClick} position={70} delay={randomDelay()}></Ball>
        <Ball click={handleClick} position={80} delay={randomDelay()}></Ball>
        <Ball click={handleClick} position={90} delay={randomDelay()}></Ball>
        <Ball click={handleClick} position={99} delay={randomDelay()}></Ball>
      </div>
    </>
  );
}

export default App;
