import React, { useState } from 'react';
import './App.css';
import Ball from './view/compontents/Ball'
import Counter from './view/compontents/Counter'


function creatArray() {


  for (let i = 0; i < 1000; i++) {
    let position = (Math.random() * 80)
    let delay = (i)
    let id = uid()
    let img = "https://i.ibb.co/7j9sDfr/flafel-new.png" 
    let tahiny = false
    balls.push({ position, delay, id, img })
  }

  console.log(balls)
}

function uid() {
  return Math.random().toString(36).slice(-8)
}



let balls: any = []

creatArray()

function App() {


  let [hits, setHits] = useState(0)


  function handleClick(id: any, ev: any) {
    console.log(id)
    console.log(ev)
    let index = balls.findIndex((ball: any) => ball.id === id)
    if (!balls[index].tahiny) {
      balls[index].img = 'https://i.ibb.co/nkvttWv/flafel-with.png'
      balls[index].tahiny = true
      setHits(hits + 1)
    }

    // const ballElement:any = document.getElementById(`${balls[index].id}`)
  }


  return (
    <>
      <div className="App">
        <Counter hits={hits}></Counter>
        {balls && balls.map((ball: any, i: number) =>
          <Ball key={i} handleClick={handleClick} randomDelay={ball.delay} randomPositin={ball.position} img={ball.img} id={ball.id} setHits={setHits} hits={hits} ball={ball}/>
        )}

      </div>
    </>
  );
}

export default App;
