import React, { useState } from 'react';
import './App.css';

import Ball from './view/compontents/Ball'
import Counter from './view/compontents/Counter'



function creatArray() {

  for (let i = 0; i < 10; i++) {
    let position = (Math.random() * 100)
    let delay = (Math.random() * 11)
    let id = uid()
    let img = "https://i.ibb.co/b3tx4pK/flafel.png"
    let tahiny = false
    balls.push({ position, delay, id, img })
  }

  // console.log(balls)
}

function uid() {
  return Math.random().toString(36).slice(-8)
}


let balls: any = []

creatArray()

function App() {


  let [hits, setHits] = useState(0)
  // let [position, setPosition] = useState(0)
  // let [delay, setDelay] = useState (0)
  // let [balls, setBalls] = useState<Array<string>>([])

  function handleClick(id: any, ev: any) {
    console.log(id)
    console.log(ev)
    let index = balls.findIndex((ball: any) => ball.id == id)
    if (!balls[index].tahiny) {
      console.log(index)
      balls[index].img = 'https://i.ibb.co/nkvttWv/flafel-with.png'
      balls[index].tahiny = true
      setHits(hits+1)
    }

    // const ballElement = document.getElementById(`${balls[index].id}`)
    // console.dir(ballElement)
    // console.dir(ballElement?.getBoundingClientRect().top)
    // let zibi:any = ballElement?.getBoundingClientRect().top
    // if (zibi > 500) {
      
    //   console.log('yehhhhhh!')
    // }
  }

  


  // function resetBall(){
  //   console.log(balls[0].)
  // }


  return (
    <>
      <div className="App">
        <Counter hits={hits}></Counter>
        {balls.map((ball: any, i: number) =>
          <Ball key={i} handleClick={handleClick} randomDelay={ball.delay} randomPositin={ball.position} img={ball.img} id={ball.id} />
        )}

      </div>
    </>
  );
}

export default App;
