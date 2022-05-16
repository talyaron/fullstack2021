import Menu from './view/components/Menu';
import Scene from './view/components/Scene';
import Counter from './view/components/Counter';
import { useState, useEffect } from 'react';
import './view/style/global.scss'
import './App.css';

function uid() {
  return Math.random().toString(36).slice(-6);
}


export interface targetInterface {
  id: String;
  status: String;
}

const arr: any = [];
for (let i = 0; i < 25; i++) {
  arr[i] = { id: uid(), status: '' }
};


function App() {

  const [targets, setTargets] = useState<Array<targetInterface>>([]);
  const [points, setPoints] = useState<number>(0);

  useEffect(() => {
    const fallingTarget: any = document?.querySelector(`.target`)
    
    
    
    if (fallingTarget) {
      const index = targets.findIndex((target)=> target.id === fallingTarget.id)
      const scene: any = document.querySelector('.scene');
      const sceneWidth: number = parseInt(getComputedStyle(scene).width, 10);
      const offset = (Math.random() * sceneWidth)
      fallingTarget.style.left = (offset - 50 + 'px')
      fallingTarget.classList.add("dropping")
      setTimeout(() => {
        if (targets[index].status !== 'hit') {
          setPoints(points - 1);
          fallingTarget.classList.remove("target");
          fallingTarget.classList.add("in-vis");
          setTargets([...targets])
        }
      }, 1600);
    }
  }, [targets])


  function handleStartGame() {
    setTargets([...arr]);
    const menu: any = document.querySelector('.menu');
    menu?.classList.add("in-vis");


  }
  

  function handleTargetClick(ev: any) {
    setPoints(points + 1);
    ev.target.classList.remove("target");
    ev.target.classList.add("exploded");
    setTimeout(() => {
      ev.target.classList.add("in-vis");
    }, 400);
    const newTargets = [...targets]
    const index = targets.findIndex((target) => target.id === ev.target.id)
    newTargets[index].status = 'hit';
    setTargets([...newTargets])


  }

  return (
    <div className="App">
      <header className="App-header root">
        <Counter score={points} />
        <Scene startGame={handleStartGame} targets={targets} registerHit={handleTargetClick} />
      </header>
    </div>
  );
}

export default App;
