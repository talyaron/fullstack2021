import { url } from 'inspector';
import React, { useState, useEffect } from 'react';
import './App.css';
import Ball from './view/compontents/Ball'
import Counter from './view/compontents/Counter'

function uid() {
  return Math.random().toString(36).slice(-8)
}

let pita = <img src="/images/pita4.png" alt="" />

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


let balls: any = []

creatArray()



function handleStart() {
  const start = document.querySelectorAll('.falafel')

  start.forEach((ball: any) => {
    ball.style.display = 'block'
  });

  let audioCircus = new Audio('./sound/sharif1.mp3');
  let playOn: any = null
  if (playOn == null) {
    audioCircus.play();
    audioCircus.loop = true;
    audioCircus.volume = 0.4;
  }
  playOn = true
}


function App() {
  let [hits, setHits] = useState(0)

  function handleClick(id: any, ev: any) {
    let audioSquish = new Audio('./sound/Squish.mp3');
    audioSquish.play();

    let index = balls.findIndex((ball: any) => ball.id === id)
    if (!balls[index].tahiny) {
      balls[index].img = 'https://i.ibb.co/nkvttWv/flafel-with.png'
      balls[index].tahiny = true
      setHits(hits + 1)
    }
  }

  return (
    <>
      <div className="App">
        <button className='start' onClick={() => handleStart()}>LET'S GO!</button>
        <Counter hits={hits}></Counter>
        {balls && balls.map((ball: any, i: number) =>
          <Ball key={i} handleClick={handleClick} randomDelay={ball.delay} randomPositin={ball.position} img={ball.img} id={ball.id} setHits={setHits} hits={hits} ball={ball} />
        )}
        <div className='pita'>{pita}</div>
      </div>

    </>
  );
}

export default App;
