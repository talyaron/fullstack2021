import React, { useState } from 'react';
import './App.css';
import Ball from './view/compontents/Ball'
import Counter from './view/compontents/Counter'



function creatArray() {

  for (let i = 0; i < 10; i++) {
    let position = (Math.random() * 100)
    let delay = (Math.random() * 11)
    let id = uid()
    balls.push({position,delay,id})
  }

}

function uid() {
  return Math.random().toString(36).slice(-4)
}


let balls: any = []

creatArray()

function App() {
  

  let [hits, setHits] = useState(0)
  // let [position, setPosition] = useState(0)
  // let [delay, setDelay] = useState (0)
  // let [balls, setBalls] = useState<Array<string>>([])

  function handleClick() {
    setHits(addOne(hits))
  }

  function addOne(x:number){
    return x+1;
  }

  return (
    <>
      <div className="App">
        <Counter hits={hits}></Counter>
        {balls.map((ball:any,i:number) => 
          <Ball key={i} handleClick={handleClick} randomDelay={ball.delay} randomPositin={ball.position} />
         )}

      </div>
    </>
  );
}

export default App;
